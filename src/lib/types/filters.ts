export type AdminAppointmentsFilters = 'doctor' | 'patient' | 'status' | 'scheduledFor';

export type AdminUsersFilters =
  | 'name'
  | 'email'
  | 'role'
  | 'date'
  | 'isDoctorVerified'
  | 'isEmailVerified';

export type PatienHistoryFilters = 'doctor' | 'status' | 'type' | 'scheduledFor';
