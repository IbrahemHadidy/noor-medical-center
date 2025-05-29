import { Prisma } from '@generated/client';

export function splitNameQuery(query: string | null): string[] {
  if (!query) return [];
  return query.trim().split(/\s+/).filter(Boolean);
}

export function createNameFilters(terms: string[]): Prisma.UserWhereInput[] {
  return terms.map((term) => ({
    OR: [
      { firstName: { contains: term, mode: 'insensitive' } },
      { lastName: { contains: term, mode: 'insensitive' } },
    ],
  }));
}
