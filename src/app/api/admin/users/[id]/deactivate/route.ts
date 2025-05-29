import { prisma } from '@/lib/prisma/prisma';
import { type NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/admin/users/{id}/deactivate:
 *   patch:
 *     summary: Deactivate user
 *     description: Deactivate user
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
 *         description: User deactivated
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
      },
      data: {
        isDoctorVerified: false,
        isEmailVerified: false,
      },
    });

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error('[DEACTIVATE_USER_ERROR]', error);
    return new NextResponse('Failed to deactivate user', { status: 500 });
  }
}
