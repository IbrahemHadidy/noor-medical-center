import { prisma } from '@/lib/prisma/prisma';
import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/admin/doctors/pending:
 *   get:
 *     summary: Get unverified doctors
 *     description: Get unverified doctors
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/validations/User'
 *       500:
 *         description: Server error
 */
export async function GET() {
  try {
    const unverifiedDoctors = await prisma.user.findMany({
      where: {
        role: 'DOCTOR',
        isDoctorVerified: false,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
      },
    });

    return NextResponse.json(unverifiedDoctors);
  } catch (error) {
    console.error('[GET_DOCTORS_PENDING_ERROR]', error);
    return new NextResponse('Failed to fetch doctors', { status: 500 });
  }
}
