'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils/cn';
import {
  Column,
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  type OnChangeFn,
  type PaginationState,
  type RowSelectionState,
  type SortingState,
  Table as TableType,
  useReactTable,
  type VisibilityState,
} from '@tanstack/react-table';
import {
  ArrowDown,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUpDown,
  EyeOff,
  RotateCcw,
  Settings2,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import type { DateRange } from 'react-day-picker';
import { Button } from './button';
import { RangeDatePicker, SingleDatePicker } from './date-picker';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { Input } from './input';
import { Label } from './label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Switch } from './switch';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

export interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export interface DataTableFilter<T extends string> {
  id: T;
  placeholder: string;
  className?: string;
  type?: 'boolean' | 'date' | 'date-range' | 'select' | 'text';
  options?: { value: string; label: string }[];
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  totalItems: number;
  filters?: DataTableFilter<string>[];
  pageSizeOptions?: number[];
  isLoading?: boolean;
  isFetching?: boolean;
  stats?: { label: string; value: string }[];
  filterValues?: Record<string, DateRange | Date | string | boolean>;
  onFilterChange?: (filterId: string, value: DateRange | Date | string | boolean) => void;
  paginationState: PaginationState;
  sortingState?: SortingState;
  onPaginationChange: OnChangeFn<PaginationState>;
  onSortingChange?: OnChangeFn<SortingState>;
}

export interface DataTablePaginationProps<TData> {
  table: TableType<TData>;
  pageSizeOptions?: number[];
  totalItems: number;
}

export interface DataTableViewOptionsProps<TData> {
  table: TableType<TData>;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  const t = useTranslations('Layout.Table');

  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn('group relative flex items-center justify-between gap-2', className)}>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="truncate">{title}</span>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 opacity-0 transition-opacity group-hover:opacity-100"
            onClick={() => column.toggleVisibility(false)}
            aria-label={t('hideColumn')}
          >
            <EyeOff className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
          onClick={() => {
            if (!column.getIsSorted()) {
              column.toggleSorting(false);
            } else {
              column.toggleSorting(column.getIsSorted() === 'asc');
            }
          }}
          aria-label={t('sort')}
        >
          {column.getIsSorted() === 'asc' ? (
            <ArrowUp className="h-4 w-4" />
          ) : column.getIsSorted() === 'desc' ? (
            <ArrowDown className="h-4 w-4" />
          ) : (
            <ChevronsUpDown className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}

export function DataTablePagination<TData>({
  table,
  pageSizeOptions = [10, 20, 30, 40, 50],
  totalItems,
}: DataTablePaginationProps<TData>) {
  const locale = useLocale();
  const t = useTranslations('Layout.Table');

  const isRtl = locale === 'ar';

  const pageCount = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex + 1;

  return (
    <div className="flex items-center justify-between border-t-1 px-2 py-1">
      <div className="text-muted-foreground flex-1 text-sm">
        {table.getFilteredSelectedRowModel().rows.length} {t('of')} {totalItems} {t('row(s)')}{' '}
        {t('selected')}.
      </div>
      <div className="flex flex-wrap items-center gap-2 lg:space-x-8" dir="ltr">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">{t('rowsPerPage')}</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger dir={isRtl ? 'rtl' : 'ltr'} className="h-8! w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {pageSizeOptions.map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          {t('page')} {currentPage} {t('of')} {pageCount}
        </div>
        <div className="flex items-center space-x-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                <ChevronsLeft className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">{t('goToFirst')}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="h-8 w-8 p-0"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">{t('goToPrevious')}</TooltipContent>
          </Tooltip>
          <p className="text-sm font-medium">{t('page')}:</p>
          <div className="relative">
            <Input
              type="number"
              min={1}
              max={pageCount}
              value={currentPage}
              onChange={(e) => {
                const page = Math.max(1, Math.min(pageCount, Number(e.target.value) || 1));
                table.setPageIndex(page - 1);
              }}
              className="h-8 min-w-15 text-start [&::-webkit-inner-spin-button]:appearance-none"
              onBlur={(e) => {
                if (!e.target.value) {
                  e.target.value = currentPage.toString();
                }
              }}
            />
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="h-8 w-8 p-0"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">{t('goToNext')}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => table.setPageIndex(pageCount - 1)}
                disabled={!table.getCanNextPage()}
              >
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">{t('goToLast')}</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export function DataTableViewOptions<TData>({ table }: DataTableViewOptionsProps<TData>) {
  const t = useTranslations('Layout.Table');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-9 flex-1">
          <Settings2 className="h-4 w-4" />
          <span className="sr-only sm:not-sr-only">{t('view')}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>{t('toggleColumns')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter((column) => typeof column.accessorFn !== 'undefined' && column.getCanHide())
          .map((column) => (
            <DropdownMenuCheckboxItem
              key={column.id}
              className="capitalize"
              checked={column.getIsVisible()}
              onCheckedChange={(value) => column.toggleVisibility(!!value)}
            >
              {column.id}
            </DropdownMenuCheckboxItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DataTable<TData, TValue>({
  columns,
  data,
  totalItems,
  filters = [],
  filterValues,
  onFilterChange,
  pageSizeOptions = [10, 20, 30, 40, 50],
  isLoading = false,
  isFetching = false,
  stats,
  paginationState,
  sortingState,
  onPaginationChange,
  onSortingChange,
}: DataTableProps<TData, TValue>) {
  const t = useTranslations('Layout.Table');
  const locale = useLocale();

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const isRtl = locale === 'ar';

  const table = useReactTable({
    data,
    columns,
    manualPagination: true,
    manualSorting: true,
    pageCount: Math.ceil(totalItems / paginationState.pageSize),
    state: {
      pagination: paginationState,
      sorting: sortingState,
      columnVisibility,
      rowSelection,
    },
    onPaginationChange: onPaginationChange,
    onSortingChange: onSortingChange,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="mb-2 flex w-full flex-col items-center gap-2 py-4">
        {stats && (
          <div className="mb-4 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-muted rounded p-4">
                <div className="text-muted-foreground text-sm">{stat.label}</div>
                <div className="text-2xl font-semibold">{stat.value}</div>
              </div>
            ))}
          </div>
        )}
        {filters.length > 0 && (
          <div className="flex w-full flex-col gap-2 md:flex-row md:items-center">
            {filters.map((filter) => {
              const handleChange = (value: string | Date | DateRange | boolean) => {
                onFilterChange?.(filter.id, value);
              };

              if (filter.type === 'boolean') {
                return (
                  <div
                    key={filter.id}
                    className={cn(
                      'bg-muted border-muted-foreground flex items-center space-x-2 rounded-sm px-4 py-2',
                      filter.className
                    )}
                  >
                    <Switch
                      checked={(filterValues?.[filter.id] || false) as boolean}
                      onCheckedChange={handleChange}
                    />
                    <Label>{filter.placeholder}</Label>
                  </div>
                );
              }

              if (filter.type === 'date') {
                return (
                  <div key={filter.id} className={cn('flex-1', filter.className)}>
                    <SingleDatePicker
                      value={filterValues?.[filter.id] as Date}
                      onChange={handleChange}
                      placeholder={filter.placeholder}
                      showTime
                    />
                  </div>
                );
              }

              if (filter.type === 'date-range') {
                return (
                  <div key={filter.id} className={cn('flex-1', filter.className)}>
                    <RangeDatePicker
                      value={filterValues?.[filter.id] as DateRange}
                      onChange={handleChange}
                      placeholder={filter.placeholder}
                      showTime
                    />
                  </div>
                );
              }

              if (filter.type === 'select') {
                return (
                  <Select
                    key={filter.id}
                    value={(filterValues?.[filter.id] || '') as string}
                    onValueChange={handleChange}
                  >
                    <SelectTrigger
                      dir={isRtl ? 'rtl' : 'ltr'}
                      className={cn('w-full flex-1 md:w-auto', filter.className)}
                    >
                      <SelectValue placeholder={filter.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {filter.options?.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                );
              }

              return (
                <Input
                  key={filter.id}
                  type={filter.type}
                  placeholder={filter.placeholder}
                  value={(filterValues?.[filter.id] || '') as string}
                  onChange={(e) => handleChange(e.target.value)}
                  className={cn('flex-1', filter.className)}
                />
              );
            })}
            <div className="flex w-full items-center gap-2 sm:w-auto sm:gap-4">
              <div className="flex w-full items-center gap-2 sm:w-auto">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 flex-1"
                      onClick={() => {
                        filters.forEach((filter) => {
                          onFilterChange?.(filter.id, '');
                        });
                      }}
                      disabled={!Object.values(filterValues || {}).some(Boolean)}
                    >
                      <RotateCcw className="h-4 w-4" />
                      <span className="sm:hidden">{t('resetFilters')}</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="bg-muted text-foreground rounded-md px-3 py-1.5 text-xs"
                  >
                    {t('resetFilters')}
                  </TooltipContent>
                </Tooltip>
                <DataTableViewOptions table={table} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="rounded-md border">
        {isLoading ? (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableHead
                      key={index}
                      className={cn(
                        'border-muted/20 border-e-1 last:border-e-0',
                        isRtl && 'text-right'
                      )}
                    >
                      <div className="bg-muted my-1.25 h-5 animate-pulse" />
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...Array(paginationState.pageSize)].map((_, index) => (
                  <TableRow key={index}>
                    {columns.map((column, cellIndex) => (
                      <TableCell
                        key={cellIndex}
                        className="border-muted/20 border-e-1 last:border-e-0"
                      >
                        {cellIndex === columns.length - 1 ? (
                          <div className="flex w-full items-center gap-2">
                            <div className="bg-muted h-8 w-1/3 animate-pulse rounded-md" />
                            <div className="bg-muted h-8 w-1/4 animate-pulse rounded-md" />
                          </div>
                        ) : (
                          <div className="bg-muted my-1.5 h-5 animate-pulse rounded" />
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className={cn('overflow-x-auto', isFetching && 'pointer-events-none opacity-50')}>
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead
                        key={header.id}
                        className={cn(
                          'border-muted/20 border-e-1 last:border-e-0',
                          isRtl && 'text-right'
                        )}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  <>
                    {table.getRowModel().rows.map((row) => (
                      <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                        {row.getVisibleCells().map((cell) => (
                          <TableCell
                            key={cell.id}
                            className="border-muted/20 border-e-1 last:border-e-0"
                          >
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </>
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      {t('noResults')}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        )}
        <DataTablePagination
          table={table}
          pageSizeOptions={pageSizeOptions}
          totalItems={totalItems}
        />
      </div>
    </>
  );
}
