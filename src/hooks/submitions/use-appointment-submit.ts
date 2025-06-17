import { useCreateAppointmentMutation } from '@/lib/api/endpoints/dashboard';
import { getErrorMessage } from '@/lib/utils/get-error-message';
import { type AppointmentData } from '@/lib/validations/appointment';
import { type AppointmentType } from '@generated/client';
import { toast } from 'sonner';

export const useAppointmentSubmit = () => {
  const [createAppointment, { isLoading, error, isSuccess, reset }] =
    useCreateAppointmentMutation();

  const handleAppointmentSubmit = async ({
    data,
    patientId,
    doctorId,
    scheduledFor,
    specialty,
  }: {
    data: AppointmentData;
    patientId: string;
    doctorId: string;
    scheduledFor: string;
    specialty: AppointmentType | null;
  }) => {
    await createAppointment({
      appointmentType: specialty as AppointmentType,
      notes: data.reason,
      price: data.price.toString(),
      patientId,
      doctorId,
      scheduledFor,
    }).unwrap();
    toast.success('Booking successful');
  };

  return {
    handleAppointmentSubmit,
    isLoading,
    error: getErrorMessage(error),
    isSuccess,
    reset,
  };
};
