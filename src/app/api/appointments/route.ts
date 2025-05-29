import { prisma } from '@/lib/prisma/prisma';
import { getSession } from '@/lib/utils/auth';
import { Role } from '@generated/client';
import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/appointments:
 *   get:
 *     summary: List all appointments (admin or doctor)
 *     tags: [Appointments]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Array of appointments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/validations/Appointment'
 */
export async function GET() {
  const session = await getSession();
  if (!session?.user || (session.user.role !== Role.ADMIN && session.user.role !== Role.DOCTOR)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const where = session.user.role === Role.DOCTOR ? { doctorId: session.user.id } : {};

  const appts = await prisma.appointment.findMany({
    where,
    include: { doctor: true, patient: true },
    orderBy: { scheduledFor: 'asc' },
  });

  return NextResponse.json(appts);
}
