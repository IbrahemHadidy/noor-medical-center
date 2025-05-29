import { prisma } from '@/lib/prisma/prisma';
import type { SafeUser } from '@/lib/types/user';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET as string;

/**
 * Checks if the user is logged in and returns the user if they are, otherwise returns null
 * @returns {Promise<{user: SafeUser} | null>} - The user or null
 */
export async function getSession(): Promise<{ user: SafeUser } | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) return null;

  try {
    const payload = verify(token, JWT_SECRET) as { id: string };
    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      include: { specializations: true },
    });

    return user ? { user } : null;
  } catch {
    return null;
  }
}

/**
 * Checks if the user is logged in and returns the user if they are, otherwise throws an error
 * @returns {Promise<SafeUser>} - The user
 * @throws {Error} - If the user is not logged in
 */
export async function getAuthUserOrThrow(): Promise<SafeUser> {
  const token = (await cookies()).get('token')?.value;
  if (!token) throw new Error('Unauthenticated');

  const user = verify(token, process.env.JWT_SECRET!) as SafeUser;
  return user;
}
