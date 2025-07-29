'use client';

import { DataTable } from '@/components/ui/data-table';
import { useDebouncedValue } from '@/hooks/use-debounced-value';
import { useGetUsersQuery } from '@/lib/api/endpoints/admin';
import type { Role } from '@prisma/client';
import type { PaginationState, SortingState, Updater } from '@tanstack/react-table';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import type { DateRange } from 'react-day-picker';
import { columns } from './columns';
import { filters as filtersInputs } from './filters';

type Filters = {
  name: string;
  email: string;
  role: Role | 'All';
  date?: DateRange;
  doctorVerifiedAt?: boolean;
  emailVerifiedAt?: boolean;
};

export default function AdminUsers() {
  const t = useTranslations('AdminUsers');

  //------------------------------- State -------------------------------//
  const [filters, setFilters] = useState<Filters>({
    name: '',
    email: '',
    role: 'All',
    date: undefined,
    doctorVerifiedAt: undefined,
    emailVerifiedAt: undefined,
  });
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([]);

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
    doctorVerifiedAt: filters.doctorVerifiedAt ? true : undefined,
    emailVerifiedAt: filters.emailVerifiedAt ? true : undefined,
    startDate: filters.date?.from?.toISOString(),
    endDate: filters.date?.to?.toISOString(),
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
