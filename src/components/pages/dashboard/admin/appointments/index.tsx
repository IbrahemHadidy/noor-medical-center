'use client';

import { DataTable } from '@/components/ui/data-table';
import { useDebouncedValue } from '@/hooks/use-debounced-value';
import { useGetAdminAppointmentsQuery, useGetAdminStatsQuery } from '@/lib/api/endpoints/admin';
import type { AppointmentStatus } from '@prisma/client';
import type { PaginationState, SortingState, Updater } from '@tanstack/react-table';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import type { DateRange } from 'react-day-picker';
import { columns } from './columns';
import { filters as filtersInputs } from './filters';
import { stats } from './stats';

type Filters = {
  doctor: string;
  patient: string;
  status: AppointmentStatus | 'All';
  scheduledFor?: DateRange;
};

export default function AdminAppointments() {
  const t = useTranslations('AdminAppointments');

  //------------------------------- State -------------------------------//
  const [filters, setFilters] = useState<Filters>({
    doctor: '',
    patient: '',
    status: 'All',
    scheduledFor: undefined,
  });
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([]);

  const debouncedDoctor = useDebouncedValue(filters.doctor, 300);
  const debouncedPatient = useDebouncedValue(filters.patient, 300);

  const memoizedColumns = useMemo(() => columns(t), [t]);
  const memoizedFilters = useMemo(() => filtersInputs(t), [t]);

  //------------------------------- Queries -------------------------------//
  const {
    data: response,
    isLoading: loadingAppointments,
    isFetching: fetchingAppointments,
  } = useGetAdminAppointmentsQuery({
    page: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
    sortBy: sorting[0]?.id || 'scheduledFor',
    sortOrder: sorting[0]?.desc ? 'desc' : 'asc',
    doctor: debouncedDoctor || undefined,
    patient: debouncedPatient || undefined,
    status: filters.status === 'All' ? undefined : filters.status,
    startDate: filters.scheduledFor?.from?.toISOString(),
    endDate: filters.scheduledFor?.to?.toISOString(),
  });

  const {
    data: statsData,
    isLoading: loadingStats,
    isFetching: fetchingStats,
  } = useGetAdminStatsQuery();

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
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t('title')}</h1>

      <DataTable
        columns={memoizedColumns}
        data={response?.data ?? []}
        totalItems={response?.total ?? 0}
        filters={memoizedFilters}
        pageSizeOptions={[5, 10, 20]}
        isLoading={loadingAppointments || loadingStats}
        isFetching={fetchingAppointments || fetchingStats}
        stats={stats({ t, statsData })}
        filterValues={filters}
        paginationState={pagination}
        sortingState={sorting}
        onPaginationChange={handlePaginationChange}
        onSortingChange={handleSortingChange}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}
