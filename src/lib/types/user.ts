import type { Prisma, Role } from '@generated/client';

export type UserWithAllRelations = Prisma.UserGetPayload<{
  include: {
    specializations: true;
    doctorAppointments: {
      include: {
        patient: true;
      };
    };
    patientAppointments: {
      include: {
        doctor: true;
      };
    };
  };
}>;

export type SafeUser = Omit<
  UserWithAllRelations,
  'password' | 'doctorAppointments' | 'patientAppointments'
>;

export type SafeDoctor = SafeUser;
export type SafePatient = Omit<SafeUser, 'specializations' | 'availability'>;

export type SafeUserWithName = Omit<SafeUser, 'firstName' | 'lastName'> & {
  name: string;
};

export type PaginatedUsers = {
  data: SafeUser[];
  total: number;
  page: number;
  pageSize: number;
};

export type GetUsersParams = {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  role?: Role;
  name?: string;
  email?: string;
  isDoctorVerified?: boolean;
  isEmailVerified?: boolean;
  startDate?: string;
  endDate?: string;
};
