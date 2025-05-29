import { prisma } from '@/lib/prisma/prisma';
import { getSession } from '@/lib/utils/auth';
import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/appointments/book:
 *   post:
 *     summary: Book an appointment
 *     tags: [Appointments]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - patientId
 *               - doctorId
 *               - scheduledFor
 *               - appointmentType
 *               - price
 *             properties:
 *               patientId:
 *                 type: string
 *               doctorId:
 *                 type: string
 *               scheduledFor:
 *                 type: string
 *                 format: date-time
 *               appointmentType:
 *                 type: string
 *                 enum:
 *                   - ${Object.values(prisma.dmmf.datamodel.enums.AppointmentType.values).join("',\n                     - '") }
 *               price:
 *                 type: number
 *               notes:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created Appointment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/validations/Appointment'
 *       400:
 *         description: Missing or invalid fields
 *       401:
 *         description: Unauthorized
 *       409:
 *         description: Time slot already booked
 */
export async function POST(req: Request) {
  const session = await getSession();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { patientId, doctorId, scheduledFor, appointmentType, price, notes } = body;

  // simple validation
  if (!patientId || !doctorId || !scheduledFor || !appointmentType || price == null) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const when = new Date(scheduledFor);
  if (isNaN(when.getTime())) {
    return NextResponse.json({ error: 'Invalid date-time' }, { status: 400 });
  }

  // conflict?
  const conflict = await prisma.appointment.findFirst({
    where: { doctorId, scheduledFor: when },
  });
  if (conflict) {
    return NextResponse.json({ error: 'Time slot already booked' }, { status: 409 });
  }

  const appt = await prisma.appointment.create({
    data: {
      patientId,
      doctorId,
      scheduledFor: when,
      type: appointmentType,
      price,
      notes,
    },
  });

  return NextResponse.json(appt, { status: 201 });
}
