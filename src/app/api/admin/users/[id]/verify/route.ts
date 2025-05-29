import { prisma } from '@/lib/prisma/prisma';
import { Role } from '@generated/client';
import { type NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/admin/users/{id}/verify:
 *   patch:
 *     summary: Verify user
 *     description: Verify user
 *     tags: [Admin]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: User id
 *     responses:
 *       200:
 *         description: User verified
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 user:
 *                   $ref: '#/components/validations/User'
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
export async function PATCH(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id: userId } = await params;

  try {
    const user = await prisma.user.update({
      where: {
        id: userId,
        OR: [
          { role: Role.DOCTOR, isDoctorVerified: false },
          { role: Role.PATIENT, isEmailVerified: false },
        ],
      },
      data: {
        isDoctorVerified: true,
        isEmailVerified: true,
      },
    });

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error('[VERIFY_USER_ERROR]', error);
    return new NextResponse('Failed to verify user', { status: 500 });
  }
}
