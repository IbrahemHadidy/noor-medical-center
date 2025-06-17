'use client';

import { DataTable } from '@/components/ui/data-table';
import { useDebouncedValue } from '@/hooks/use-debounced-value';
import { useGetUsersQuery } from '@/lib/api/endpoints/admin';
import {
  updateFilters,
  updatePagination,
  updateSorting,
} from '@/lib/features/admin/users/admin-users.slice';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { deserializeDateRange, serializeDateRange } from '@/lib/utils/serialize-date-range';
import type { PaginationState, SortingState, Updater } from '@tanstack/react-table';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import type { DateRange } from 'react-day-picker';
import { columns } from './columns';
import { filters as filtersInputs } from './filters';

export function AdminUsers() {
  const t = useTranslations('AdminUsers');
  const dispatch = useAppDispatch();

  //------------------------------- State -------------------------------//
  const { filters, pagination, sorting } = useAppSelector((state) => state.adminUsers);

  const deserializedFilters = {
    ...filters,
    date: deserializeDateRange(filters.date),
  };

  const debouncedName = useDebouncedValue(filters.name, 300);
  const debouncedEmail = useDebouncedValue(filters.email, 300);

  const memoizedColumns = useMemo(() => columns(t), [t]);
  const memoizedFilters = useMemo(() => filtersInputs(t), [t]);

  //------------------------------- Queries -------------------------------//
  const {
    data: response,
    isLoading,
    isFetching,
  } = useGetUsersQuery({
    page: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
    sortBy: sorting[0]?.id || 'date',
    sortOrder: sorting[0]?.desc ? 'desc' : 'asc',
    role: filters.role === 'All' ? undefined : filters.role,
    name: debouncedName || undefined,
    email: debouncedEmail || undefined,
    isDoctorVerified: filters.isDoctorVerified,
    isEmailVerified: filters.isEmailVerified,
    startDate: filters.date?.from,
    endDate: filters.date?.to,
  });

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
    if (filterId === 'date') {
      dispatch(updateFilters({ date: serializeDateRange(value as DateRange) }));
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
        columns={memoizedColumns}
        data={response?.data ?? []}
        totalItems={response?.total ?? 0}
        filters={memoizedFilters}
        pageSizeOptions={[10, 20, 50]}
        isLoading={isLoading}
        isFetching={isFetching}
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
