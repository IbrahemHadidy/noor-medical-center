import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { mainApi } from './api/main-api';
import adminAppointmentsReducer from './features/admin/appointments/admin-appointments-slice';
import adminUsersReducer from './features/admin/users/admin-users-slice';
import authListener from './features/auth/auth-listener';
import authReducer from './features/auth/auth-slice';
import doctorAppointmentsReducer from './features/doctor/appointments/doctor-appointments-slice';
import patientHistoryReducer from './features/patient/history/patient-history-slice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [mainApi.reducerPath]: mainApi.reducer,
      auth: authReducer,

      adminAppointments: adminAppointmentsReducer,
      adminUsers: adminUsersReducer,

      doctorAppointments: doctorAppointmentsReducer,

      patientHistory: patientHistoryReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(authListener.middleware).concat(mainApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
