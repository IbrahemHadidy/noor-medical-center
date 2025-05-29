'use client';

import type { DataTableFilter } from '@/components/ui/data-table';
import type { AdminAppointmentsFilters } from '@/lib/types/filters';
import { AppointmentStatus } from '@generated/client';
import type { useTranslations } from 'next-intl';

export function filters(
  t: ReturnType<typeof useTranslations<'AdminAppointments'>>
): DataTableFilter<AdminAppointmentsFilters>[] {
  return [
    {
      id: 'patient',
      placeholder: t('Filters.patient'),
      className: 'flex-1',
      type: 'text',
    },
    {
      id: 'status',
      placeholder: t('Filters.status'),
      type: 'select',
      options: [
        { value: 'All', label: t('StatusOptions.all') },
        { value: AppointmentStatus.SCHEDULED, label: t('StatusOptions.scheduled') },
        { value: AppointmentStatus.DONE, label: t('StatusOptions.done') },
        { value: AppointmentStatus.CANCELLED, label: t('StatusOptions.cancelled') },
      ],
    },
    {
      id: 'scheduledFor',
      placeholder: t('Filters.date'),
      type: 'date-range',
    },
  ];
}
