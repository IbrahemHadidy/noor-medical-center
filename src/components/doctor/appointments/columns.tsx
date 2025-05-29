import { DataTableColumnHeader } from '@/components/ui/data-table';
import { AppointmentWithUser } from '@/lib/types/appointement';
import type { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { useTranslations } from 'next-intl';
import { ActionsColumn } from './actions-column';

export function columns(
  t: ReturnType<typeof useTranslations<'AdminAppointments'>>
): ColumnDef<AppointmentWithUser>[] {
  return [
    {
      id: 'patient',
      accessorKey: t('Columns.patient'),
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t('Columns.patient')} />
      ),
      cell: ({ row }) => {
        const patient = row.original.patient;
        return `${patient.firstName} ${patient.lastName}`;
      },
      enableSorting: true,
    },
    {
      id: 'status',
      accessorKey: t('Columns.status'),
      header: ({ column }) => <DataTableColumnHeader column={column} title={t('Columns.status')} />,
      cell: ({ row }) => t(`Status.${row.original.status}`),
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
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t('Columns.scheduledFor')} />
      ),
      cell: ({ row }) =>
        row.original.scheduledFor
          ? format(new Date(row.original.scheduledFor), 'dd MMM yyyy, HH:mm')
          : '—',
      enableSorting: true,
    },
    {
      id: 'actions',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t('Columns.actions')} />
      ),
      cell: ({ row }) => <ActionsColumn appt={row.original} />,
      enableSorting: false,
    },
  ];
}
