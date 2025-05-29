import { prisma } from '@/lib/prisma/prisma';
import { AppointmentType, type Prisma, Role } from '@generated/client';
import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/doctors:
 *   get:
 *     summary: Get all doctors with optional pagination
 *     tags:
 *       - Doctors
 *     parameters:
 *       - name: specialty
 *         in: query
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by medical specialty
 *       - name: page
 *         in: query
 *         schema:
 *           type: integer
 *           minimum: 1
 *         required: false
 *         description: Page number (default 1)
 *       - name: pageSize
 *         in: query
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *         required: false
 *         description: Number of items per page (default 10)
 *       - name: all
 *         in: query
 *         schema:
 *           type: boolean
 *         required: false
 *         description: Get all doctors (default false)
 *     responses:
 *       200:
 *         description: Paginated list of doctors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Doctor'
 *                 total:
 *                   type: integer
 *                 page:
 *                   type: integer
 *                 pageSize:
 *                   type: integer
 *       400:
 *         description: Invalid pagination parameters
 *       500:
 *         description: Internal server error
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get('page')) || 1;
    const pageSize = Number(searchParams.get('pageSize')) || 10;
    const getAll = searchParams.get('all') === 'true';
    const specialty = searchParams.get('specialty') as AppointmentType | null;

    if (specialty && !Object.values(AppointmentType).includes(specialty)) {
      return NextResponse.json({ error: 'Invalid specialty parameter' }, { status: 400 });
    }

    const whereClause: Prisma.UserWhereInput = {
      role: Role.DOCTOR,
      ...(specialty && {
        specializations: {
          some: {
            type: specialty,
          },
        },
      }),
    };

    const [doctors, total] = await prisma.$transaction([
      prisma.user.findMany({
        where: whereClause,
        include: {
          patientAppointments: true,
          availability: true,
          specializations: true,
        },
        orderBy: { createdAt: 'desc' },
        skip: getAll ? 0 : (page - 1) * pageSize,
        take: getAll ? undefined : pageSize,
      }),
      prisma.user.count({ where: whereClause }),
    ]);

    return NextResponse.json({
      data: doctors,
      total,
      page,
      pageSize,
    });
  } catch (error) {
    console.error('[GET_DOCTORS_ERROR]', error);
    return NextResponse.json({ error: 'Failed to fetch doctors' }, { status: 500 });
  }
}
