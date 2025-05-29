import { prisma } from '@/lib/prisma/prisma';
import { getSession } from '@/lib/utils/auth';
import { type NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/doctors/{id}/availability/{slotId}:
 *   post:
 *     summary: Add a new availability slot for a doctor
 *     tags: [Doctors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *         description: Doctor ID
 *       - in: path
 *         name: slotId
 *         required: true
 *         schema: { type: string }
 *         description: Availability Slot ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dayOfWeek: { type: number }
 *               startTime: { type: string, example: "09:00" }
 *               endTime: { type: string, example: "17:00" }
 *     security: [ { cookieAuth: [] } ]
 *     responses:
 *       200:
 *         description: The created availability slot
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id: { type: string }
 *                 doctorId: { type: string }
 *                 dayOfWeek: { type: number }
 *                 startTime: { type: string, example: "09:00" }
 *                 endTime: { type: string, example: "17:00" }
 *                 createdAt: { type: string, format: date-time }
 *       403: { description: Unauthorized }
 */
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string; slotId: string }> }
) {
  const session = await getSession();
  const user = session?.user;

  const { id, slotId } = await params;

  if (user?.role !== 'DOCTOR' || user.id !== id) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
  }
  await prisma.doctorAvailability.delete({ where: { id: slotId } });
  return NextResponse.json({ success: true });
}
