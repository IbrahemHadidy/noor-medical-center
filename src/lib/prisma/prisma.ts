import { PrismaClient } from '@generated/client';

export const prisma = new PrismaClient();

export const prismaWithLogging = new PrismaClient({
  log: ['query'],
});
