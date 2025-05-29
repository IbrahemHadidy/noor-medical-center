import { prisma } from '@/lib/prisma/prisma';
import { getAuthUserOrThrow } from '@/lib/utils/auth';
import type { Prisma, Role } from '@generated/client';
import { type NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/admin/users:
 *   get:
 *     summary: Get users with pagination, sorting, and filters
 *     tags: [Admin]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *         required: false
 *         description: Page number (default 1)
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *         required: false
 *         description: Number of items per page (default 10)
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [name, email, role, createdAt, isDoctorVerified, isEmailVerified]
 *         required: false
 *         description: Field to sort by (default createdAt)
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         required: false
 *         description: Sort order (default desc)
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *           enum: [DOCTOR, PATIENT, ADMIN]
 *         required: false
 *         description: Filter by role
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by name (searches first and last names)
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by email (case-insensitive contains)
 *       - in: query
 *         name: isDoctorVerified
 *         schema:
 *           type: boolean
 *         required: false
 *         description: Filter by doctor verification status (true/false)
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         required: false
 *         description: Filter users created after or on this date
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         required: false
 *         description: Filter users created before or on this date
 *     responses:
 *       200:
 *         description: Paginated list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 total:
 *                   type: integer
 *                 page:
 *                   type: integer
 *                 pageSize:
 *                   type: integer
 *       400:
 *         description: Invalid query parameters
 *       403:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
export async function GET(req: NextRequest) {
  try {
    const user = await getAuthUserOrThrow();

    if (user.role !== 'ADMIN') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);

    // Pagination
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '10');

    // Validate pagination
    if (isNaN(page) || isNaN(pageSize) || page < 1 || pageSize < 1 || pageSize > 100) {
      return NextResponse.json({ message: 'Invalid pagination parameters' }, { status: 400 });
    }

    // Sorting
    const allowedSortBy = [
      'name',
      'email',
      'role',
      'createdAt',
      'isDoctorVerified',
      'isEmailVerified',
    ] as const;
    const sortBy = searchParams.get('sortBy');
    const validSortBy = allowedSortBy.includes(sortBy as (typeof allowedSortBy)[number])
      ? (sortBy as (typeof allowedSortBy)[number])
      : 'createdAt';
    const sortOrder = searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc';

    // Date handling
    const parseDate = (dateString: string | null): Date | null => {
      if (!dateString) return null;
      const date = new Date(dateString);
      return isNaN(date.getTime()) ? null : date;
    };

    const startDate = parseDate(searchParams.get('startDate'));
    const endDate = parseDate(searchParams.get('endDate'));

    // Date validation
    if (searchParams.get('startDate') && !startDate) {
      return NextResponse.json({ message: 'Invalid startDate format' }, { status: 400 });
    }
    if (searchParams.get('endDate') && !endDate) {
      return NextResponse.json({ message: 'Invalid endDate format' }, { status: 400 });
    }

    // Adjust end date to include full day
    if (endDate) {
      endDate.setHours(23, 59, 59, 999);
    }

    // Date range validation
    if (startDate && endDate && startDate > endDate) {
      return NextResponse.json({ message: 'startDate cannot be after endDate' }, { status: 400 });
    }

    // Filters
    const role = searchParams.get('role') as Role | null;
    const email = searchParams.get('email');
    const nameQuery = searchParams.get('name');
    const isDoctorVerifiedParam = searchParams.get('isDoctorVerified');
    const isEmailVerifiedParam = searchParams.get('isEmailVerified');

    // Process name query
    const nameTerms = nameQuery ? nameQuery.trim().split(/\s+/) : [];

    // Process isDoctorVerified
    let isDoctorVerified: boolean | undefined;
    if (isDoctorVerifiedParam !== null) {
      if (isDoctorVerifiedParam !== 'true' && isDoctorVerifiedParam !== 'false') {
        return NextResponse.json({ message: 'Invalid isDoctorVerified value' }, { status: 400 });
      }
      isDoctorVerified = isDoctorVerifiedParam === 'true';
    }

    // Process isEmailVerified
    let isEmailVerified: boolean | undefined;
    if (isEmailVerifiedParam !== null) {
      if (isEmailVerifiedParam !== 'true' && isEmailVerifiedParam !== 'false') {
        return NextResponse.json({ message: 'Invalid isEmailVerified value' }, { status: 400 });
      }
      isEmailVerified = isEmailVerifiedParam === 'true';
    }

    // Build where clause
    const whereClause: Prisma.UserWhereInput = {
      ...(role && { role }),
      ...(email && { email: { contains: email, mode: 'insensitive' } }),
      ...(isDoctorVerified !== undefined && { isDoctorVerified }),
      ...(isEmailVerified !== undefined && { isEmailVerified }),
      ...((startDate || endDate) && {
        createdAt: {
          ...(startDate && { gte: startDate }),
          ...(endDate && { lte: endDate }),
        },
      }),
      ...(nameTerms.length > 0 && {
        AND: nameTerms.map((term) => ({
          OR: [
            { firstName: { contains: term, mode: 'insensitive' } },
            { lastName: { contains: term, mode: 'insensitive' } },
          ],
        })),
      }),
    };

    // Execute query
    const [users, total] = await prisma.$transaction([
      prisma.user.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
        where: whereClause,
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          role: true,
          isDoctorVerified: true,
          isEmailVerified: true,
          createdAt: true,
        },
        orderBy:
          validSortBy === 'name'
            ? [{ firstName: sortOrder }, { lastName: sortOrder }]
            : { [validSortBy]: sortOrder },
      }),
      prisma.user.count({
        where: whereClause,
      }),
    ]);

    return NextResponse.json({
      data: users,
      total,
      page,
      pageSize,
    });
  } catch (error) {
    console.error('[GET_USERS_ERROR]', error);
    return NextResponse.json({ message: 'Failed to fetch users' }, { status: 500 });
  }
}
