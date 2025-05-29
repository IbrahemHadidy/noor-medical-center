import type { DoctorAvailability } from '@generated/client';
import { mainApi } from '../main-api';

export const availabilityApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getDoctorAvailability: builder.query<DoctorAvailability[], string>({
      query: (doctorId) => `doctors/${doctorId}/availability`,
      providesTags: (result, error, id) =>
        result
          ? [
              ...result.map((slot) => ({ type: 'Availability' as const, id: slot.id })),
              { type: 'Availability', id },
            ]
          : [{ type: 'Availability', id }],
    }),

    addAvailability: builder.mutation<
      DoctorAvailability,
      { doctorId: string; slot: { dayOfWeek: number; startTime: string; endTime: string } }
    >({
      query: ({ doctorId, slot }) => ({
        url: `doctors/${doctorId}/availability`,
        method: 'POST',
        body: slot,
      }),
      invalidatesTags: (result, error, { doctorId }) => [{ type: 'Availability', id: doctorId }],
    }),

    removeAvailability: builder.mutation<void, { doctorId: string; slotId: string }>({
      query: ({ doctorId, slotId }) => ({
        url: `doctors/${doctorId}/availability/${slotId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, { doctorId }) => [{ type: 'Availability', id: doctorId }],
    }),
  }),
});

export const {
  useGetDoctorAvailabilityQuery,
  useAddAvailabilityMutation,
  useRemoveAvailabilityMutation,
} = availabilityApi;
