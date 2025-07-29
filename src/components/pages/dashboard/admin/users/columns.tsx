import { DataTableColumnHeader } from '@/components/ui/data-table';
import type { SafeUser } from '@/lib/types/user';
import type { ColumnDef } from '@tanstack/react-table';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ActionsColumn } from './actions-column';

export function columns(
  t: ReturnType<typeof useTranslations<'AdminUsers'>>
): ColumnDef<SafeUser>[] {
  return [
    {
      id: 'name',
      accessorKey: t('Columns.name'),
      header: ({ column }) => <DataTableColumnHeader column={column} title={t('Columns.name')} />,
      cell: ({ row }) => {
        const user = row.original;
        return `${user.firstName} ${user.lastName}`;
      },
      enableSorting: true,
    },
    {
      id: 'email',
      accessorKey: t('Columns.email'),
      header: ({ column }) => <DataTableColumnHeader column={column} title={t('Columns.email')} />,
      cell: ({ row }) => row.original.email,
      sortingFn: (rowA, rowB) => rowA.original.email.localeCompare(rowB.original.email),
      enableSorting: true,
    },
    {
      id: 'role',
      accessorKey: t('Columns.role'),
      header: ({ column }) => <DataTableColumnHeader column={column} title={t('Columns.role')} />,
      cell: ({ row }) => t(`Role.${row.original.role}`),
      enableSorting: true,
    },
    {
      id: 'createdAt',
      accessorKey: t('Columns.createdAt'),
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t('Columns.createdAt')} />
      ),
      cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
      enableSorting: true,
    },
    {
      id: 'doctorVerifiedAt',
      accessorKey: t('Columns.doctorVerifiedAt'),
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t('Columns.doctorVerifiedAt')} />
      ),
      cell: ({ row }) =>
        row.original.doctorVerifiedAt ? (
          new Date(row.original.doctorVerifiedAt).toLocaleDateString()
        ) : (
          <X />
        ),
      enableSorting: true,
    },
    {
      id: 'emailVerifiedAt',
      accessorKey: t('Columns.emailVerifiedAt'),
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t('Columns.emailVerifiedAt')} />
      ),
      cell: ({ row }) =>
        row.original.emailVerifiedAt ? (
          new Date(row.original.emailVerifiedAt).toLocaleDateString()
        ) : (
          <X />
        ),
      enableSorting: true,
    },
    {
      id: 'actions',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t('Columns.actions')} />
      ),
      cell: ({ row }) => {
        const user = row.original;
        return <ActionsColumn user={user} />;
      },
    },
  ];
}
