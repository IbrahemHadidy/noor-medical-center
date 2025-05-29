import { prisma } from '@/lib/prisma/prisma';
import type { SafeUser } from '@/lib/types/user';
import { verifyPassword } from '@/lib/utils/encryption';
import { sign } from 'jsonwebtoken';
import { NextResponse, type NextRequest } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET as string;

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     description: Login user by email or phone
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               identifier:
 *                 type: string
 *                 description: Email or phone
 *               password:
 *                 type: string
 *                 description: Password
 *     responses:
 *       200:
 *         description: Logged in user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/validations/SafeUser'
 *       401:
 *         description: Incorrect credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 */
export async function POST(
  request: NextRequest
): Promise<NextResponse<SafeUser | { error: string }>> {
  const { identifier, password } = await request.json();

  // Find user by email or phone
  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email: identifier }, { phone: identifier }],
    },
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

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  const valid = await verifyPassword(password, user.password);
  if (!valid) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  const res = NextResponse.json(
    {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      gender: user.gender,
      role: user.role,
      image: user.image,
      isEmailVerified: user.isEmailVerified,
      emailVerifiedAt: user.emailVerifiedAt,
      isDoctorVerified: user.isDoctorVerified,
      doctorVerifiedAt: user.doctorVerifiedAt,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      isPhoneVerified: user.isPhoneVerified,
      phoneVerifiedAt: user.phoneVerifiedAt,
      specializations: user.specializations,
      passwordReset: user.passwordReset,
      lastLogin: user.lastLogin,
    },
    { status: 200 }
  );

  res.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return res;
}
