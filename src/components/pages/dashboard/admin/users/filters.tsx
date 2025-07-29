'use client';

import type { DataTableFilter } from '@/components/ui/data-table';
import type { AdminUsersFilters } from '@/lib/types/filters';
import { Role } from '@prisma/client';
import type { useTranslations } from 'next-intl';

export function filters(
  t: ReturnType<typeof useTranslations<'AdminUsers'>>
): DataTableFilter<AdminUsersFilters>[] {
  return [
    {
      id: 'name',
      placeholder: t('Filters.name'),
      className: 'flex-1',
      type: 'text',
    },
    {
      id: 'email',
      placeholder: t('Filters.email'),
      className: 'flex-1',
      type: 'text',
    },
    {
      id: 'role',
      placeholder: t('Filters.role'),
      type: 'select',
      options: [
        { value: 'All', label: t('RoleOptions.all') },
        { value: Role.ADMIN, label: t('RoleOptions.admin') },
        { value: Role.DOCTOR, label: t('RoleOptions.doctor') },
        { value: Role.PATIENT, label: t('RoleOptions.patient') },
      ],
    },
    {
      id: 'date',
      placeholder: t('Filters.createdAt'),
      type: 'date-range',
    },
    {
      id: 'doctorVerifiedAt',
      placeholder: t('Filters.doctorVerifiedAt'),
      type: 'boolean',
    },
    {
      id: 'emailVerifiedAt',
      placeholder: t('Filters.emailVerifiedAt'),
      type: 'boolean',
    },
  ];
}
