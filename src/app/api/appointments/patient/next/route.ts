import { prisma } from '@/lib/prisma/prisma';
import { getSession } from '@/lib/utils/auth';
import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/appointments/patient/next:
 *   get:
 *     summary: Get the single next upcoming appointment for the logged-in patient
 *     tags: [Appointments]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Next appointment details or null
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 - type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     doctorName:
 *                       type: string
 *                     type:
 *                       type: string
 *                     scheduledFor:
 *                       type: string
 *                     status:
 *                       type: string
 *                 - type: null
 */
export async function GET() {
  const session = await getSession();

  if (!session?.user || session.user.role !== 'PATIENT') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const now = new Date();
  const next = await prisma.appointment.findFirst({
    where: {
      patientId: session.user.id,
      scheduledFor: { gt: now },
    },
    include: { doctor: true },
    orderBy: { scheduledFor: 'asc' },
  });

  if (!next) return NextResponse.json(null);

  return NextResponse.json({
    id: next.id,
    doctorName: `${next.doctor.firstName} ${next.doctor.lastName}`,
    type: next.type,
    scheduledFor: next.scheduledFor?.toISOString(),
    status: next.status,
  });
}
