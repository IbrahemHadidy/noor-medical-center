import { prisma } from '@/lib/prisma/prisma';
import { getSession } from '@/lib/utils/auth';
import { Role } from '@generated/client';
import { NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/appointments/{id}/notes:
 *   patch:
 *     summary: Update appointment notes
 *     tags: [Appointments]
 *     security: [ { cookieAuth: [] } ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *         description: Appointment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               notes:
 *                 type: string
 *                 example: Appointment notes
 *     responses:
 *       200:
 *         description: Appointment notes updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Appointment notes updated
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
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const session = await getSession();
  const user = session?.user;

  if (!user || user.role !== Role.DOCTOR) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
  }

  const { notes } = await req.json();
  const appt = await prisma.appointment.findUnique({ where: { id } });
  if (!appt || appt.doctorId !== user.id) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  const updated = await prisma.appointment.update({
    where: { id },
    data: { notes },
  });

  return NextResponse.json(updated);
}
