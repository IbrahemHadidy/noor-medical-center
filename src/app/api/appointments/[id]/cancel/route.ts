import { prisma } from '@/lib/prisma/prisma';
import { getSession } from '@/lib/utils/auth';
import { type NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/appointments/{id}/cancel:
 *   patch:
 *     summary: Cancel an appointment
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
 *     responses:
 *       200:
 *         description: Appointment cancelled successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Appointment cancelled
 *       403:
 *         description: Unauthorized access
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Unauthorized
 */
export async function PATCH(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const session = await getSession();
  const user = session?.user;
  if (!user || user.role !== 'PATIENT') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
  }

  const appt = await prisma.appointment.findUnique({ where: { id: id } });
  if (!appt || appt.patientId !== user.id) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }
  if (appt.status !== 'SCHEDULED') {
    return NextResponse.json({ message: 'Cannot cancel' }, { status: 400 });
  }

  const updated = await prisma.appointment.update({
    where: { id: id },
    data: { status: 'CANCELLED' },
  });

  return NextResponse.json(updated);
}
