import type { SerializedDateRange } from '@/lib/types/seriazlized';
import type { AppointmentStatus, AppointmentType } from '@generated/client';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PaginationState, SortingState } from '@tanstack/react-table';

interface InitialState {
  pagination: PaginationState;
  sorting: SortingState;
  filters: {
    doctor: string;
    status: AppointmentStatus | 'All';
    type: AppointmentType | 'All';
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
    status: 'All',
    type: 'All',
    scheduledFor: undefined,
  },
};

const patientHistorySlice = createSlice({
  name: 'patient-history',
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
} = patientHistorySlice.actions;

export default patientHistorySlice.reducer;
