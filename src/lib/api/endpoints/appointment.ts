import type {
  AppointmentWithPatient,
  AppointmentWithUser,
  GetAppointmentHistoryParams,
  GetAppointmentsParams,
  PatientHistoryResponse,
} from '@/lib/types/appointement';
import type { Appointment } from '@generated/client';
import { mainApi } from '../main-api';

export const appointmentApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getDoctorAppointments: builder.query<
      { data: AppointmentWithUser[]; total: number; page: number; pageSize: number },
      GetAppointmentsParams
    >({
      query: (params) => ({
        url: 'doctors/appointments',
        params,
      }),
      providesTags: ['Appointment'],
    }),

    getPatientHistory: builder.query<PatientHistoryResponse, GetAppointmentHistoryParams>({
      query: (params) => ({
        url: 'appointments/patient/history',
        params,
      }),
      providesTags: ['Appointment'],
    }),

    cancelAppointment: builder.mutation<Appointment, string>({
      query: (id) => ({
        url: `appointments/${id}/cancel`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Appointment'],
    }),

    getAppointmentById: builder.query<AppointmentWithPatient, string>({
      query: (id) => `appointments/${id}`,
    }),

    updateAppointmentNotes: builder.mutation<Appointment, { id: string; notes: string }>({
      query: ({ id, notes }) => ({
        url: `appointments/${id}/notes`,
        method: 'PATCH',
        body: { notes },
      }),
      invalidatesTags: ['Appointment'],
    }),
  }),
});

export const {
  useGetDoctorAppointmentsQuery,
  useGetPatientHistoryQuery,
  useCancelAppointmentMutation,
  useGetAppointmentByIdQuery,
  useUpdateAppointmentNotesMutation,
} = appointmentApi;
