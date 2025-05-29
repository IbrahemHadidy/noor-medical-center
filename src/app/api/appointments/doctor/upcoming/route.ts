import { prisma } from '@/lib/prisma/prisma';
import { getSession } from '@/lib/utils/auth';
import { format } from 'date-fns';
import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/appointments/doctor/upcoming:
 *   get:
 *     summary: Get upcoming appointments for the logged-in doctor
 *     tags: [Appointments]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Array of upcoming appointments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   patientName:
 *                     type: string
 *                   type:
 *                     type: string
 *                   scheduledFor:
 *                     type: string
 *                   status:
 *                     type: string
 */
export async function GET() {
  const session = await getSession();

  if (!session?.user || session.user.role !== 'DOCTOR') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const now = new Date();
  const appts = await prisma.appointment.findMany({
    where: {
      doctorId: session.user.id,
      scheduledFor: { gt: now },
    },
    include: { patient: true },
    orderBy: { scheduledFor: 'asc' },
  });

  const result = appts.map((a) => ({
    id: a.id,
    patientName: `${a.patient.firstName} ${a.patient.lastName}`,
    type: a.type,
    scheduledFor: a.scheduledFor ? format(a.scheduledFor, 'PPpp') : null,
    status: a.status,
  }));

  return NextResponse.json(result);
}
