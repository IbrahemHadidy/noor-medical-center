import { prisma } from '@/lib/prisma/prisma';
import { getSession } from '@/lib/utils/auth';
import { Role } from '@generated/client';
import { NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/appointments/{id}:
 *   get:
 *     summary: Get appointment by ID (for doctor)
 *     tags: [Appointments]
 *     security: [ { cookieAuth: [] } ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *         description: Appointment ID
 *     responses:
 *       200:
 *         description: Appointment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 patientId:
 *                   type: string
 *                 doctorId:
 *                   type: string
 *                 scheduledFor:
 *                   type: string
 *                   format: date-time
 *                 type:
 *                   type: string
 *                   enum:
 *                     - NEW_PATIENT
 *                     - FOLLOW_UP
 *                 status:
 *                   type: string
 *                   enum:
 *                     - PENDING
 *                     - CONFIRMED
 *                     - CANCELED
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                 patient:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     firstName:
 *                       type: string
 *                     lastName:
 *                       type: string
 *       403: { description: Unauthorized }
 */
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const session = await getSession();
  const user = session?.user;

  if (!user || user.role !== Role.DOCTOR) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
  }

  const appt = await prisma.appointment.findUnique({
    where: { id },
    include: {
      patient: { select: { id: true, firstName: true, lastName: true } },
    },
  });

  if (!appt || appt.doctorId !== user.id) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(appt);
}
