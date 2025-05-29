import { prisma } from '@/lib/prisma/prisma';
import { getSession } from '@/lib/utils/auth';
import { NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/doctors/{id}/available-times:
 *   get:
 *     summary: Get available time slots for a doctor on a given date
 *     tags: [Doctors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *         description: Doctor ID
 *       - in: query
 *         name: date
 *         required: true
 *         schema: { type: string, format: date }
 *         description: Date in YYYY-MM-DD
 *     security: [ { cookieAuth: [] } ]
 *     responses:
 *       200:
 *         description: array of "HH:MM" strings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items: { type: string, example: "09:30" }
 *       400: { description: bad request }
 *       401: { description: unauthorized }
 */
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id: doctorId } = await params;
  const dateParam = req.nextUrl.searchParams.get('date');
  if (!dateParam) return NextResponse.json({ error: 'Missing date' }, { status: 400 });

  const date = new Date(dateParam);
  if (isNaN(date.getTime())) return NextResponse.json({ error: 'Invalid date' }, { status: 400 });

  // 1) get availabilities for that weekday
  const weekday = date.getDay(); // 0..6
  const avail = await prisma.doctorAvailability.findMany({
    where: { doctorId, dayOfWeek: weekday },
  });

  // 2) build slots (here every 30 minutes)
  const slots: string[] = [];
  for (const a of avail) {
    const [sh, sm] = a.startTime.split(':').map(Number);
    const [eh, em] = a.endTime.split(':').map(Number);
    const interval = 30; // minutes

    const cur = new Date(date);
    cur.setHours(sh, sm, 0, 0);
    const end = new Date(date);
    end.setHours(eh, em, 0, 0);

    while (cur < end) {
      const hh = cur.getHours().toString().padStart(2, '0');
      const mm = cur.getMinutes().toString().padStart(2, '0');
      slots.push(`${hh}:${mm}`);
      cur.setMinutes(cur.getMinutes() + interval);
    }
  }

  // 3) filter out already-booked slots
  const startOfDay = new Date(dateParam);
  const endOfDay = new Date(dateParam);
  endOfDay.setHours(23, 59, 59, 999);

  const booked = await prisma.appointment.findMany({
    where: {
      doctorId,
      scheduledFor: { gte: startOfDay, lte: endOfDay },
    },
    select: { scheduledFor: true },
  });

  const bookedSet = new Set(
    booked.map((a) => {
      const dt = new Date(a.scheduledFor!);
      return (
        dt.getHours().toString().padStart(2, '0') +
        ':' +
        dt.getMinutes().toString().padStart(2, '0')
      );
    })
  );

  const available = slots.filter((s) => !bookedSet.has(s)).sort();
  return NextResponse.json(available);
}
