import { prisma } from '@/lib/prisma/prisma';
import { getSession } from '@/lib/utils/auth';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/appointments/{id}/status:
 *   patch:
 *     summary: Update status of an appointment
 *     tags:
 *       - Appointments
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 $ref: '#/components/validations/AppointmentStatus'
 *     responses:
 *       200:
 *         description: Updated appointment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/validations/Appointment'
 */
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session?.user || !['ADMIN', 'DOCTOR'].includes(session.user.role)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { status } = await req.json();
  const { id } = await params;

  if (session.user.role === 'DOCTOR') {
    const appt = await prisma.appointment.findUnique({ where: { id } });
    if (appt?.doctorId !== session.user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
  }

  const updated = await prisma.appointment.update({
    where: { id },
    data: { status },
    include: { doctor: true, patient: true },
  });

  return NextResponse.json(updated);
}
