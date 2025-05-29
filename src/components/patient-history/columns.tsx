import { DataTableColumnHeader } from '@/components/ui/data-table';
import { AppointmentWithDoctor } from '@/lib/types/appointement';
import type { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { useTranslations } from 'next-intl';
import { ActionsColumn } from './actions-column';

export function columns(
  t: ReturnType<typeof useTranslations<'PatientHistory'>>
): ColumnDef<AppointmentWithDoctor>[] {
  return [
    {
      id: 'doctor',
      accessorKey: t('Columns.doctor'),
      header: ({ column }) => <DataTableColumnHeader column={column} title={t('Columns.doctor')} />,
      cell: ({ row }) => `${row.original.doctor.firstName} ${row.original.doctor.lastName}`,
      enableSorting: true,
    },
    {
      id: 'type',
      accessorKey: t('Columns.type'),
      header: ({ column }) => <DataTableColumnHeader column={column} title={t('Columns.type')} />,
      cell: ({ row }) => t(`Type.${row.original.type}`),
      enableSorting: true,
    },
    {
      id: 'scheduledFor',
      accessorKey: t('Columns.scheduledFor'),
      header: t('Columns.scheduledFor'),
      cell: ({ row }) =>
        row.original.scheduledFor ? format(new Date(row.original.scheduledFor), 'PPP p') : '-',
      enableSorting: true,
    },
    {
      id: 'status',
      accessorKey: 'status',
      header: ({ column }) => <DataTableColumnHeader column={column} title={t('Columns.status')} />,
      cell: ({ row }) => t(`Status.${row.original.status}`),
      enableSorting: true,
    },
    {
      id: 'actions',
      accessorKey: t('Columns.actions'),
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t('Columns.actions')} />
      ),
      cell: ({ row }) => <ActionsColumn appointment={row.original} />,
      enableSorting: false,
    },
  ];
}
