import type { SafeUser } from '@/lib/types/user';
import { createAction, createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  isInitialized: boolean;
  user: SafeUser | null;
}

const initialState: InitialState = {
  isInitialized: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setInitialized: (state) => {
      state.isInitialized = true;
    },
    setUser: (state, action: PayloadAction<SafeUser>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const initializeAuth = createAction('auth/initializeAuth');

export const { setInitialized, setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
