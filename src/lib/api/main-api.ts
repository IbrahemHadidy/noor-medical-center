import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api', credentials: 'include' }),
  tagTypes: ['Users', 'User', 'Doctor', 'Appointment', 'AvailableTimes', 'Stats', 'Availability'],
  endpoints: () => ({}),
});
