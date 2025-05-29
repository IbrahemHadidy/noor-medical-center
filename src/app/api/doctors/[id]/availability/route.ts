import { prisma } from '@/lib/prisma/prisma';
import { getSession } from '@/lib/utils/auth';
import { type NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/doctors/{id}/availability:
 *   get:
 *     summary: Retrieve availability slots for a doctor
 *     tags: [Doctors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *         description: Doctor ID
 *     security: [ { cookieAuth: [] } ]
 *     responses:
 *       200:
 *         description: List of availability slots
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id: { type: string }
 *                   doctorId: { type: string }
 *                   dayOfWeek: { type: number }
 *                   startTime: { type: string, example: "09:00" }
 *                   endTime: { type: string, example: "17:00" }
 *                   createdAt: { type: string, format: date-time }
 *       403: { description: Unauthorized }
 *   post:
 *     summary: Add a new availability slot for a doctor
 *     tags: [Doctors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *         description: Doctor ID
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
 *   delete:
 *     summary: Delete an availability slot for a doctor
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
 *     security: [ { cookieAuth: [] } ]
 *     responses:
 *       200:
 *         description: Deletion success response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *       403: { description: Unauthorized }
 */

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  const user = session?.user;

  const { id } = await params;

  if (user?.role !== 'DOCTOR' || user.id !== id) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
  }
  const slots = await prisma.doctorAvailability.findMany({
    where: { doctorId: id },
    orderBy: { dayOfWeek: 'asc' },
  });
  return NextResponse.json(slots);
}

/**
 * @swagger
 * /api/doctors/{id}/availability:
 *   get:
 *     summary: Retrieve availability slots for a doctor
 *     tags: [Doctors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *         description: Doctor ID
 *     security: [ { cookieAuth: [] } ]
 *     responses:
 *       200:
 *         description: List of availability slots
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id: { type: string }
 *                   doctorId: { type: string }
 *                   dayOfWeek: { type: number }
 *                   startTime: { type: string, example: "09:00" }
 *                   endTime: { type: string, example: "17:00" }
 *                   createdAt: { type: string, format: date-time }
 *       403: { description: Unauthorized }
 */
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  const user = session?.user;

  const { id } = await params;

  if (user?.role !== 'DOCTOR' || user.id !== id) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
  }
  const { dayOfWeek, startTime, endTime } = await req.json();
  const slot = await prisma.doctorAvailability.create({
    data: { doctorId: id, dayOfWeek, startTime, endTime },
  });
  return NextResponse.json(slot);
}
