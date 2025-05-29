'use client';

import { DataTable } from '@/components/ui/data-table';
import { useDebouncedValue } from '@/hooks/use-debounced-value';
import { useGetAdminAppointmentsQuery, useGetAdminStatsQuery } from '@/lib/api/endpoints/admin';
import {
  updateFilters,
  updatePagination,
  updateSorting,
} from '@/lib/features/admin/appointments/admin-appointments-slice';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { deserializeDateRange, serializeDateRange } from '@/lib/utils/serialize-date-range';
import type { PaginationState, SortingState, Updater } from '@tanstack/react-table';
import { useTranslations } from 'next-intl';
import type { DateRange } from 'react-day-picker';
import { columns } from './columns';
import { filters as filtersInputs } from './filters';
import { stats } from './stats';

export function AdminAppointments() {
  const t = useTranslations('AdminAppointments');
  const dispatch = useAppDispatch();

  //------------------------------- State -------------------------------//
  const { filters, pagination, sorting } = useAppSelector((state) => state.adminAppointments);

  const deserializedFilters = {
    ...filters,
    scheduledFor: deserializeDateRange(filters.scheduledFor),
  };

  const debouncedDoctor = useDebouncedValue(filters.doctor, 300);
  const debouncedPatient = useDebouncedValue(filters.patient, 300);

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
    startDate: filters.scheduledFor?.from,
    endDate: filters.scheduledFor?.to,
  });

  const {
    data: statsData,
    isLoading: loadingStats,
    isFetching: fetchingStats,
  } = useGetAdminStatsQuery();

  //------------------------------- handlers -------------------------------//
  const handlePaginationChange = (updater: Updater<PaginationState>) => {
    const newPagination = typeof updater === 'function' ? updater(pagination) : updater;
    dispatch(updatePagination(newPagination));
  };

  const handleSortingChange = (updater: Updater<SortingState>) => {
    const newSorting = typeof updater === 'function' ? updater(sorting) : updater;
    dispatch(updateSorting(newSorting));
  };

  const handleFilterChange = (filterId: string, value: string | Date | DateRange | boolean) => {
    if (filterId === 'scheduledFor') {
      dispatch(updateFilters({ scheduledFor: serializeDateRange(value as DateRange) }));
    } else {
      dispatch(updateFilters({ [filterId]: value }));
    }
    dispatch(
      updatePagination({
        pageIndex: 0,
        pageSize: pagination.pageSize,
      })
    );
  };

  //------------------------------- Render -------------------------------//
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t('title')}</h1>

      <DataTable
        columns={columns(t)}
        data={response?.data ?? []}
        totalItems={response?.total ?? 0}
        filters={filtersInputs(t)}
        pageSizeOptions={[5, 10, 20]}
        isLoading={loadingAppointments || loadingStats}
        isFetching={fetchingAppointments || fetchingStats}
        stats={stats({ t, statsData })}
        filterValues={deserializedFilters}
        paginationState={pagination}
        sortingState={sorting}
        onPaginationChange={handlePaginationChange}
        onSortingChange={handleSortingChange}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}
