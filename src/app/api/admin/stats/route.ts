import { prisma } from '@/lib/prisma/prisma';
import { getSession } from '@/lib/utils/auth';
import getTodayDateRange from '@/lib/utils/get-today-date-range';
import { AppointmentStatus, Role } from '@generated/client';
import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/admin/stats:
 *   get:
 *     summary: Get admin dashboard statistics
 *     tags: [Admin]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Admin dashboard statistics
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 todayAppointments:
 *                   type: integer
 *                 totalDoctors:
 *                   type: integer
 *                 totalPatients:
 *                   type: integer
 *                 statusCounts:
 *                   type: object
 *                   additionalProperties:
 *                     type: integer
 */
export async function GET() {
  const session = await getSession();
  if (session?.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const statusDistribution = await Promise.all(
    Object.values(AppointmentStatus).map((status) =>
      prisma.appointment.count({ where: { status } })
    )
  );

  const { startOfDay, endOfDay } = getTodayDateRange();

  const [todayAppointments, totalDoctors, totalPatients] = await Promise.all([
    prisma.appointment.count({
      where: {
        scheduledFor: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    }),
    prisma.user.count({ where: { role: Role.DOCTOR } }),
    prisma.user.count({ where: { role: Role.PATIENT } }),
  ]);

  // Create status count object
  const statusCounts = Object.values(AppointmentStatus).reduce<Record<AppointmentStatus, number>>(
    (acc, status, index) => {
      acc[status] = statusDistribution[index];
      return acc;
    },
    {
      SCHEDULED: 0,
      IN_PROGRESS: 0,
      DONE: 0,
      CANCELLED: 0,
    }
  );

  return NextResponse.json({
    todayAppointments,
    totalDoctors,
    totalPatients,
    totalAppointments: Object.values(statusCounts).reduce((acc, count) => acc + count, 0),
    pendingAppointments: statusCounts.SCHEDULED,
    completedAppointments: statusCounts.DONE,
    cancelledAppointments: statusCounts.CANCELLED,
  });
}
