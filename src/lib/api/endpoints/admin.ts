import type {
  AppointmentRow,
  AppointmentWithUser,
  GetAppointmentsParams,
} from '@/lib/types/appointement';
import type { AdminStats } from '@/lib/types/dashboard';
import type { GetUsersParams, PaginatedUsers, SafeUser } from '@/lib/types/user';
import type { AppointmentStatus } from '@generated/client';
import { mainApi } from '../main-api';

export const adminApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<PaginatedUsers, GetUsersParams>({
      query: (params) => ({
        url: 'admin/users',
        params,
      }),
      providesTags: ['Users'],
    }),

    getPendingDoctors: builder.query<SafeUser[], void>({
      query: () => 'admin/doctors/pending',
      providesTags: ['Users'],
    }),

    verifyDoctor: builder.mutation<void, string>({
      query: (id) => ({
        url: `admin/doctors/${id}/verify`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Users'],
    }),

    getAllAppointments: builder.query<AppointmentRow[], void>({
      query: () => 'admin/appointments',
      providesTags: ['Appointment'],
    }),

    getAdminAppointments: builder.query<
      { data: AppointmentWithUser[]; total: number; page: number; pageSize: number },
      GetAppointmentsParams
    >({
      query: (params) => ({
        url: 'admin/appointments',
        params,
      }),
      providesTags: ['Appointment'],
    }),

    getAdminStats: builder.query<AdminStats, void>({
      query: () => 'admin/stats',
      providesTags: ['Stats'],
    }),

    verifyAppointment: builder.mutation<void, { id: string; status: AppointmentStatus }>({
      query: ({ id, status }) => ({
        url: `admin/appointments/${id}/status`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: ['Appointment'],
    }),

    verifyUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `admin/users/${id}/verify`,
        method: 'PATCH',
      }),
      invalidatesTags: ['User', 'Users'],
    }),

    deactivateUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `admin/users/${id}/deactivate`,
        method: 'PATCH',
      }),
      invalidatesTags: ['User', 'Users'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetPendingDoctorsQuery,
  useVerifyDoctorMutation,
  useGetAllAppointmentsQuery,
  useGetAdminAppointmentsQuery,
  useGetAdminStatsQuery,
  useVerifyAppointmentMutation,
  useVerifyUserMutation,
  useDeactivateUserMutation,
} = adminApi;
