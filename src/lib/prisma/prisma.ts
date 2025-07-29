import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const prismaWithLogging = new PrismaClient({
  log: ['query'],
});
