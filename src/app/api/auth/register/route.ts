import { prisma } from '@/lib/prisma/prisma';
import { createSaltedHash } from '@/lib/utils/encryption';
import { type NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new user account with the provided details
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *               gender:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: User successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: User with this email or phone already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

export async function POST(
  request: NextRequest
): Promise<NextResponse<{ message: string } | { error: string }>> {
  try {
    const { firstName, lastName, email, phone, password, gender, role } = await request.json();

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { phone }],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email or phone already exists.' },
        { status: 400 }
      );
    }
    const hashed = await createSaltedHash(password);

    await prisma.user.create({
      data: {
        email,
        phone,
        password: hashed,
        firstName,
        lastName,
        gender,
        role,
      },
    });

    return NextResponse.json({ message: `${role} created successfully.` }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
