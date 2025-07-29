'use client';

import { DataTable } from '@/components/ui/data-table';
import { useDebouncedValue } from '@/hooks/use-debounced-value';
import { useGetPatientHistoryQuery } from '@/lib/api/endpoints/appointment';
import type { AppointmentStatus, AppointmentType } from '@prisma/client';
import type { PaginationState, SortingState, Updater } from '@tanstack/react-table';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import type { DateRange } from 'react-day-picker';
import { columns } from './columns';
import { filters as filtersInputs } from './filters';

type Filters = {
  doctor: string;
  status: AppointmentStatus | 'All';
  type: AppointmentType | 'All';
  scheduledFor?: DateRange;
};

export default function PatientHistory() {
  const t = useTranslations('PatientHistory');

  //------------------------------- State -------------------------------//
  const [filters, setFilters] = useState<Filters>({
    doctor: '',
    status: 'All',
    type: 'All',
    scheduledFor: undefined,
  });
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([]);

  const debouncedDoctor = useDebouncedValue(filters.doctor, 300);

  const memoizedColumns = useMemo(() => columns(t), [t]);
  const memoizedFilters = useMemo(() => filtersInputs(t), [t]);

  //------------------------------- Queries -------------------------------//
  const {
    data: response,
    isLoading,
    isFetching,
  } = useGetPatientHistoryQuery({
    page: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
    sortBy: sorting[0]?.id || 'scheduledFor',
    sortOrder: sorting[0]?.desc ? 'desc' : 'asc',
    doctor: debouncedDoctor,
    status: filters.status === 'All' ? undefined : filters.status,
    type: filters.type === 'All' ? undefined : filters.type,
    startDate: filters.scheduledFor?.from?.toISOString(),
    endDate: filters.scheduledFor?.to?.toISOString(),
  });

  //------------------------------- handlers -------------------------------//
  const handlePaginationChange = (updater: Updater<PaginationState>) => {
    const newPagination = typeof updater === 'function' ? updater(pagination) : updater;
    setPagination(newPagination);
  };

  const handleSortingChange = (updater: Updater<SortingState>) => {
    const newSorting = typeof updater === 'function' ? updater(sorting) : updater;
    setSorting(newSorting);
  };

  const handleFilterChange = (filterId: string, value: string | Date | DateRange | boolean) => {
    setFilters((prev) => ({ ...prev, [filterId]: value }));
    setPagination((prev) => ({
      pageIndex: 0,
      pageSize: prev.pageSize,
    }));
  };

  //------------------------------- Render -------------------------------//
  return (
    <div className="space-y-6 p-4">
      <h1 className="text-2xl font-bold">{t('title')}</h1>

      <DataTable
        columns={memoizedColumns}
        data={response?.data ?? []}
        totalItems={response?.total ?? 0}
        filters={memoizedFilters}
        isLoading={isLoading}
        isFetching={isFetching}
        filterValues={filters}
        paginationState={pagination}
        sortingState={sorting}
        pageSizeOptions={[5, 10, 20]}
        onPaginationChange={handlePaginationChange}
        onSortingChange={handleSortingChange}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}
