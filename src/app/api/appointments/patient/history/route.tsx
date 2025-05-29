import { prisma } from '@/lib/prisma/prisma';
import { getSession } from '@/lib/utils/auth';
import { createNameFilters, splitNameQuery } from '@/lib/utils/name-filter';
import type { AppointmentStatus, AppointmentType, Prisma } from '@generated/client';
import { NextResponse, type NextRequest } from 'next/server';

/**
 * @swagger
 * /api/appointments/patient/history:
 *   get:
 *     summary: Get appointment history for the logged-in patient with pagination, sorting, and filters
 *     tags: [Appointments]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *         required: false
 *         description: Page number (default 1). Ignored when 'all=true'
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *         required: false
 *         description: Number of items per page (default 10). Ignored when 'all=true'
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [scheduledFor, doctor, status, type]
 *         required: false
 *         description: Field to sort by (default scheduledFor)
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         required: false
 *         description: Sort order (default desc)
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [DONE, SCHEDULED, CANCELLED]
 *         required: false
 *         description: Filter by appointment status
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [GENERAL_CHECKUP, DENTAL, DERMATOLOGY, PSYCHIATRY, OPHTHALMOLOGY, ORTHOPEDICS, CARDIOLOGY, NEUROLOGY, PEDIATRICS, GASTROENTEROLOGY, ENDOCRINOLOGY, UROLOGY, GYNECOLOGY, OTOLARYNGOLOGY, PULMONOLOGY, RADIOLOGY, PHYSICAL_THERAPY, NUTRITION, ONCOLOGY, ALLERGY_IMMUNOLOGY]
 *         required: false
 *         description: Filter by appointment type
 *       - in: query
 *         name: doctor
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by doctor name (case-insensitive search in first or last name)
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         required: false
 *         description: Filter appointments scheduled after or on this date
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         required: false
 *         description: Filter appointments scheduled before or on this date
 *       - in: query
 *         name: all
 *         schema:
 *           type: boolean
 *         required: false
 *         description: If true, returns all data without pagination
 *     responses:
 *       200:
 *         description: Appointment history
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                           doctorName:
 *                             type: string
 *                           type:
 *                             type: string
 *                           scheduledFor:
 *                             type: string
 *                           status:
 *                             type: string
 *                     total:
 *                       type: integer
 *                     page:
 *                       type: integer
 *                     pageSize:
 *                       type: integer
 *                 - type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       doctorName:
 *                         type: string
 *                       type:
 *                         type: string
 *                       scheduledFor:
 *                         type: string
 *                       status:
 *                         type: string
 *       400:
 *         description: Invalid query parameters
 *       403:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
export async function GET(req: NextRequest) {
  try {
    const session = await getSession();
    const user = session?.user;

    if (!user || user.role !== 'PATIENT') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const allParam = searchParams.get('all') === 'true';

    // Sorting
    const allowedSortBy = ['scheduledFor', 'doctor', 'status', 'type'] as const;
    const sortBy = searchParams.get('sortBy');
    const validSortBy = allowedSortBy.includes(sortBy as (typeof allowedSortBy)[number])
      ? (sortBy as (typeof allowedSortBy)[number])
      : 'scheduledFor';
    const sortOrder = searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc';

    // Date handling
    const parseDate = (dateString: string | null): Date | null => {
      if (!dateString) return null;
      const date = new Date(dateString);
      return isNaN(date.getTime()) ? null : date;
    };

    const startDate = parseDate(searchParams.get('startDate'));
    const endDate = parseDate(searchParams.get('endDate'));

    // Date validation
    if (searchParams.get('startDate') && !startDate) {
      return NextResponse.json({ message: 'Invalid startDate format' }, { status: 400 });
    }
    if (searchParams.get('endDate') && !endDate) {
      return NextResponse.json({ message: 'Invalid endDate format' }, { status: 400 });
    }

    // Adjust end date to include full day
    if (endDate) {
      endDate.setHours(23, 59, 59, 999);
    }

    // Date range validation
    if (startDate && endDate && startDate > endDate) {
      return NextResponse.json({ message: 'startDate cannot be after endDate' }, { status: 400 });
    }

    // Filters
    const status = searchParams.get('status') as AppointmentStatus | null;
    const type = searchParams.get('type') as AppointmentType | null;
    const doctorQuery = searchParams.get('doctor');

    const doctorTerms = splitNameQuery(doctorQuery);

    // Build where clause
    const whereClause: Prisma.AppointmentWhereInput = {
      patientId: user.id,
      ...(status && { status }),
      ...(type && { type }),
      ...((startDate || endDate) && {
        scheduledFor: {
          ...(startDate && { gte: startDate }),
          ...(endDate && { lte: endDate }),
        },
      }),
      ...(doctorTerms.length > 0 && {
        doctor: { AND: createNameFilters(doctorTerms) },
      }),
    };

    // Handle 'all' parameter
    if (allParam) {
      const appointments = await prisma.appointment.findMany({
        where: whereClause,
        include: { doctor: { select: { firstName: true, lastName: true } } },
        orderBy:
          validSortBy === 'doctor'
            ? [{ doctor: { firstName: sortOrder } }, { doctor: { lastName: sortOrder } }]
            : { [validSortBy]: sortOrder },
      });

      return NextResponse.json({
        data: appointments,
        total: appointments.length,
        page: 1,
        pageSize: appointments.length,
      });
    }

    // Pagination
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '10');

    // Validate pagination
    if (isNaN(page) || isNaN(pageSize) || page < 1 || pageSize < 1 || pageSize > 100) {
      return NextResponse.json({ message: 'Invalid pagination parameters' }, { status: 400 });
    }

    // Execute paginated query
    const [appointments, total] = await prisma.$transaction([
      prisma.appointment.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
        where: whereClause,
        include: { doctor: { select: { firstName: true, lastName: true } } },
        orderBy:
          validSortBy === 'doctor'
            ? [{ doctor: { firstName: sortOrder } }, { doctor: { lastName: sortOrder } }]
            : { [validSortBy]: sortOrder },
      }),
      prisma.appointment.count({ where: whereClause }),
    ]);

    return NextResponse.json({
      data: appointments,
      total,
      page,
      pageSize,
    });
  } catch (error) {
    console.error('[GET_APPOINTMENT_HISTORY_ERROR]', error);
    return NextResponse.json({ message: 'Failed to fetch appointment history' }, { status: 500 });
  }
}
