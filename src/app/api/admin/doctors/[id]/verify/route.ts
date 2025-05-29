import { prisma } from '@/lib/prisma/prisma';
import { type NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/admin/doctors/{id}/verify:
 *   patch:
 *     summary: Verify doctor
 *     description: Verify doctor
 *     tags: [Admin]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Doctor id
 *     responses:
 *       200:
 *         description: Doctor verified
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 doctor:
 *                   $ref: '#/components/validations/User'
 *       404:
 *         description: Doctor not found
 *       500:
 *         description: Server error
 */
export async function PATCH(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id: doctorId } = await params;

  try {
    const doctor = await prisma.user.update({
      where: {
        id: doctorId,
        role: 'DOCTOR',
      },
      data: {
        isDoctorVerified: true,
      },
    });

    return NextResponse.json({ success: true, doctor });
  } catch (error) {
    console.error('[VERIFY_DOCTOR_ERROR]', error);
    return new NextResponse('Failed to verify doctor', { status: 500 });
  }
}
