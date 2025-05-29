import type { AppointmentStatus, AppointmentType, Prisma } from '@generated/client';

export type AppointmentWithUser = Prisma.AppointmentGetPayload<{
  include: {
    doctor: {
      select: {
        id: true;
        firstName: true;
        lastName: true;
      };
    };
    patient: {
      select: {
        id: true;
        firstName: true;
        lastName: true;
      };
    };
  };
}>;

export type AppointmentWithDoctor = Prisma.AppointmentGetPayload<{
  include: {
    doctor: {
      select: {
        id: true;
        firstName: true;
        lastName: true;
      };
    };
  };
}>;

export type AppointmentWithPatient = Prisma.AppointmentGetPayload<{
  include: {
    patient: {
      select: {
        id: true;
        firstName: true;
        lastName: true;
      };
    };
  };
}>;

export type AppointmentRow = {
  id: string;
  patientName: string;
  type: string;
  scheduledFor: string;
  status: string;
};

export interface Appointment {
  id: string;
  doctorName: string;
  patientName: string;
  type: AppointmentType;
  scheduledFor: string;
  status: AppointmentStatus;
}

export type NextAppointment = Pick<
  Appointment,
  'id' | 'doctorName' | 'scheduledFor' | 'type' | 'status'
>;

export interface AppointmentCreateRequest {
  patientId: string;
  doctorId: string;
  type: string;
  reason: string;
  scheduledFor: string;
}

export type GetAppointmentsParams = {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  doctor?: string;
  patient?: string;
  status?: AppointmentStatus;
  startDate?: string;
  endDate?: string;
};

export type GetAppointmentHistoryParams = {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  doctor?: string;
  status?: AppointmentStatus;
  type?: AppointmentType;
  startDate?: string;
  endDate?: string;
  all?: boolean;
};

export type PatientHistoryResponse = {
  data: AppointmentWithDoctor[];
  total: number;
  page: number;
  pageSize: number;
};
