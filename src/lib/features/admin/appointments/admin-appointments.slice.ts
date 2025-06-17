import type { SerializedDateRange } from '@/lib/types/seriazlized';
import type { AppointmentStatus } from '@generated/client';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PaginationState, SortingState } from '@tanstack/react-table';

interface InitialState {
  pagination: PaginationState;
  sorting: SortingState;
  filters: {
    doctor: string;
    patient: string;
    status: AppointmentStatus | 'All';
    scheduledFor?: SerializedDateRange;
  };
}

const initialState: InitialState = {
  pagination: {
    pageIndex: 0,
    pageSize: 10,
  },
  sorting: [],
  filters: {
    doctor: '',
    patient: '',
    status: 'All',
    scheduledFor: undefined,
  },
};

const adminAppointmentsSlice = createSlice({
  name: 'admin-appointments',
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
} = adminAppointmentsSlice.actions;

export default adminAppointmentsSlice.reducer;
