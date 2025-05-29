'use client';

import type { DataTableFilter } from '@/components/ui/data-table';
import type { PatienHistoryFilters } from '@/lib/types/filters';
import { AppointmentStatus, AppointmentType } from '@generated/client';
import type { useTranslations } from 'next-intl';

export function filters(
  t: ReturnType<typeof useTranslations<'PatientHistory'>>
): DataTableFilter<PatienHistoryFilters>[] {
  return [
    {
      id: 'doctor',
      placeholder: t('Filters.doctor'),
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
      id: 'type',
      placeholder: t('Filters.type'),
      type: 'select',
      options: [
        { value: 'All', label: t('Type.ALL') },
        { value: AppointmentType.GENERAL_PRACTICE, label: t('Type.GENERAL_PRACTICE') },
        { value: AppointmentType.CARDIOLOGY, label: t('Type.CARDIOLOGY') },
        { value: AppointmentType.VACCINATION, label: t('Type.VACCINATION') },
        { value: AppointmentType.RADIOLOGY, label: t('Type.RADIOLOGY') },
        { value: AppointmentType.DERMATOLOGY, label: t('Type.DERMATOLOGY') },
        { value: AppointmentType.PEDIATRICS, label: t('Type.PEDIATRICS') },
        { value: AppointmentType.ORTHOPEDICS, label: t('Type.ORTHOPEDICS') },
        { value: AppointmentType.DENTISTRY, label: t('Type.DENTISTRY') },
        { value: AppointmentType.NEUROLOGY, label: t('Type.NEUROLOGY') },
        { value: AppointmentType.GYNECOLOGY, label: t('Type.GYNECOLOGY') },
        { value: AppointmentType.OPHTHALMOLOGY, label: t('Type.OPHTHALMOLOGY') },
      ],
    },
    {
      id: 'scheduledFor',
      placeholder: t('Filters.scheduledFor'),
      type: 'date-range',
    },
  ];
}
