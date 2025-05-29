import type { SerializedDateRange } from '@/lib/types/seriazlized';
import type { Role } from '@generated/client';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PaginationState, SortingState } from '@tanstack/react-table';

interface InitialState {
  pagination: PaginationState;
  sorting: SortingState;
  filters: {
    name: string;
    email: string;
    role: Role | 'All';
    date?: SerializedDateRange;
    isDoctorVerified?: boolean;
    isEmailVerified?: boolean;
  };
}

const initialState: InitialState = {
  pagination: {
    pageIndex: 0,
    pageSize: 10,
  },
  sorting: [],
  filters: {
    name: '',
    email: '',
    role: 'All',
    date: undefined,
    isDoctorVerified: undefined,
    isEmailVerified: undefined,
  },
};

const adminUsersSlice = createSlice({
  name: 'admin-users',
  initialState,
  reducers: {
    updatePagination: (state, action: PayloadAction<PaginationState>) => {
      state.pagination = action.payload;
    },
    updateSorting: (state, action: PayloadAction<SortingState>) => {
      state.sorting = action.payload;
    },
    updateFilters: (state, action: PayloadAction<Partial<InitialState['filters']>>) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
    resetPagination: (state) => {
      state.pagination = initialState.pagination;
    },
    resetSorting: (state) => {
      state.sorting = initialState.sorting;
    },
    resetAll: (state) => {
      state.pagination = initialState.pagination;
      state.sorting = initialState.sorting;
      state.filters = initialState.filters;
    },
  },
});

export const {
  updatePagination,
  updateSorting,
  updateFilters,
  resetFilters,
  resetPagination,
  resetSorting,
  resetAll,
} = adminUsersSlice.actions;

export default adminUsersSlice.reducer;
