import { prisma } from '@/lib/prisma/prisma';
import { getSession } from '@/lib/utils/auth';
import { createNameFilters, splitNameQuery } from '@/lib/utils/name-filter';
import { AppointmentStatus, Prisma, Role } from '@generated/client';
import { NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/doctor/appointments:
 *   get:
 *     summary: List all doctor appointments
 *     tags: [Admin]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         required: false
 *         description: Page of appointments to return
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *         required: false
 *         description: Amount of appointments to return per page
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         required: false
 *         description: Sort results by this field
 *         enum: [scheduledFor, doctor, patient, status]
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         required: false
 *         description: Filter appointments from this date (inclusive)
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         required: false
 *         description: Filter appointments up to this date (inclusive)
 *     responses:
 *       200:
 *         description: List of appointments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/validations/Appointment'
 */
export async function GET(req: NextRequest) {
  const session = await getSession();
  const user = session?.user;

  if (!user || user.role !== Role.DOCTOR) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
  }

  const { searchParams } = new URL(req.url);

  const doctorId = user.id;

  // Pagination
  const page = parseInt(searchParams.get('page') || '1');
  const pageSize = parseInt(searchParams.get('pageSize') || '10');

  // Validate pagination
  if (page < 1 || pageSize < 1 || pageSize > 100) {
    return NextResponse.json({ message: 'Invalid pagination parameters' }, { status: 400 });
  }

  // Sorting
  const sortBy = searchParams.get('sortBy') || 'scheduledFor';
  const sortOrder = (searchParams.get('sortOrder') ?? 'desc') as 'asc' | 'desc';

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
  const patientQuery = searchParams.get('patient');
  const statusQuery = searchParams.get('status') as AppointmentStatus;

  // Process name queries
  const patientTerms = splitNameQuery(patientQuery);

  // Base where clause
  const baseWhere: Prisma.AppointmentWhereInput = {
    doctorId,
    ...(statusQuery && { status: statusQuery }),
    ...((startDate || endDate) && {
      scheduledFor: {
        ...(startDate && { gte: startDate }),
        ...(endDate && { lte: endDate }),
      },
    }),
    ...(patientTerms.length > 0 && {
      patient: { AND: createNameFilters(patientTerms) },
    }),
  };

  try {
    const [appointments, total] = await prisma.$transaction([
      prisma.appointment.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
        where: baseWhere,
        include: {
          doctor: { select: { firstName: true, lastName: true, id: true } },
          patient: { select: { firstName: true, lastName: true, id: true } },
        },
        orderBy:
          sortBy === 'patient'
            ? [{ patient: { firstName: sortOrder } }, { patient: { lastName: sortOrder } }]
            : { [sortBy]: sortOrder },
      }),
      prisma.appointment.count({ where: baseWhere }),
    ]);

    return NextResponse.json({
      data: appointments,
      total,
      page,
      pageSize,
    });
  } catch (error) {
    console.error('[DOCTOR_GET_APPOINTMENTS]', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
