import { prisma } from '@/lib/prisma/prisma';
import type { SafeUser } from '@/lib/types/user';
import { getSession } from '@/lib/utils/auth';
import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Get current user
 *     tags: [Auth]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: User data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 email:
 *                   type: string
 *                 firstName:
 *                   type: string
 *                 lastName:
 *                   type: string
 *                 role:
 *                   type: string
 *                   enum: [ADMIN, DOCTOR, PATIENT]
 *       401:
 *         description: Unauthorized
 */
export async function GET(): Promise<NextResponse<SafeUser | null>> {
  const session = await getSession();
  if (!session) return NextResponse.json(null, { status: 401 });

  const userId = session.user.id;

  try {
    // Fetch full user from the database
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        password: true,
        phone: true,
        role: true,
        gender: true,
        image: true,
        isEmailVerified: true,
        emailVerifiedAt: true,
        isDoctorVerified: true,
        doctorVerifiedAt: true,
        createdAt: true,
        updatedAt: true,
        isPhoneVerified: true,
        phoneVerifiedAt: true,
        specializations: true,
        passwordReset: true,
        lastLogin: true,
      },
    });

    if (user) {
      await prisma.user.update({
        where: { id: user.id },
        data: { lastLogin: new Date() },
      });
    }

    if (!user) return NextResponse.json(null, { status: 401 });

    return NextResponse.json(user);
  } catch {
    return NextResponse.json(null, { status: 401 });
  }
}
