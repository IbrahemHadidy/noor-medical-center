import type { Appointment, AppointmentRow, NextAppointment } from '@/lib/types/appointement';
import type { SafeDoctor } from '@/lib/types/user';
import type { AppointmentStatus, AppointmentType } from '@generated/client';
import { mainApi } from '../main-api';

export const dashboardApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getDoctors: builder.query<
      {
        data: SafeDoctor[];
        total: number;
        page: number;
        pageSize: number;
      },
      {
        page?: number;
        pageSize?: number;
        specialty?: AppointmentType;
        all?: boolean;
      }
    >({
      query: () => 'doctors',
      providesTags: ['Doctor'],
    }),

    createAppointment: builder.mutation<
      Appointment,
      {
        patientId: string;
        doctorId: string;
        scheduledFor: string;
        appointmentType: AppointmentType;
        price: string;
        notes?: string;
      }
    >({
      query: (body) => ({
        url: 'appointments/book',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['AvailableTimes', 'Appointment'],
    }),

    updateAppointmentStatus: builder.mutation<
      Appointment,
      { id: string; status: AppointmentStatus }
    >({
      query: ({ id, status }) => ({
        url: `appointments/${id}/status`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: ['Appointment'],
    }),

    listAppointments: builder.query<Appointment[], void>({
      query: () => 'appointments',
      providesTags: ['Appointment'],
    }),

    getAvailableTimes: builder.query<string[], { doctorId: string; date: string }>({
      query: ({ doctorId, date }) => ({
        url: `doctors/${doctorId}/available-times`,
        params: { date },
      }),
      providesTags: ['AvailableTimes'],
    }),

    getDoctorUpcoming: builder.query<AppointmentRow[], void>({
      query: () => 'appointments/doctor/upcoming',
      providesTags: ['Appointment'],
    }),

    getPatientNext: builder.query<NextAppointment | null, void>({
      query: () => 'appointments/patient/next',
      providesTags: ['Appointment'],
    }),
  }),
});

export const {
  useGetDoctorsQuery,
  useCreateAppointmentMutation,
  useUpdateAppointmentStatusMutation,
  useListAppointmentsQuery,
  useGetAvailableTimesQuery,
  useGetDoctorUpcomingQuery,
  useGetPatientNextQuery,
} = dashboardApi;
