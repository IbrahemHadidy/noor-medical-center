'use client';

import { SingleDatePicker } from '@/components/ui/date-picker';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAppointmentSubmit } from '@/hooks/submitions/use-appointment-submit';
import { useRouter } from '@/lib/i18n/navigation';
import { useAppSelector } from '@/lib/store';
import { AppointmentType } from '@prisma/client';
import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import AppointmentForm from './appointment-form';
import AvailableTimeSlots from './available-time-slots';
import DoctorSelector from './doctor-selector';

export default function Booking() {
  const router = useRouter();
  const { handleAppointmentSubmit, isLoading, error, isSuccess, reset } = useAppointmentSubmit();

  const t = useTranslations('Booking');
  const { user } = useAppSelector((state) => state.auth);

  const [doctorId, setDoctorId] = useState<string | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<AppointmentType | null>(null);
  const [date, setDate] = useState<string>(() => new Date().toISOString().slice(0, 10));
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  // Handle success state
  useEffect(() => {
    if (isSuccess) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
        reset();
        router.push('/dashboard');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, reset, router]);

  const handleSpecialtySelect = (specialty: AppointmentType) => {
    setSelectedSpecialty(specialty);
    setDoctorId(null);
    setSelectedTime(null);
  };

  const handleDoctorSelect = (id: string) => {
    setDoctorId(id);

    setSelectedTime(null);
  };

  const handleDateChange = (date: Date) => {
    setDate(date.toISOString().slice(0, 10));
  };

  return (
    <div className="mx-auto max-w-lg space-y-8 py-8">
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="animate-in fade-in-90 max-w-sm rounded-lg bg-white p-6 text-center dark:bg-gray-800">
            <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-500" />
            <h3 className="mb-2 text-lg font-semibold">{t('successTitle')}</h3>
            <p className="text-muted-foreground">{t('successMessage')}</p>
          </div>
        </div>
      )}

      <h1 className="text-2xl font-bold">{t('pageTitle')}</h1>

      {/* 1. Select Specialty */}
      <div className="mb-4">
        <Label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {t('specialtyLabel')}
        </Label>
        <Select onValueChange={handleSpecialtySelect} value={selectedSpecialty || ''}>
          <SelectTrigger className="mt-1 flex w-full">
            <SelectValue placeholder={t('selectSpecialty')} />
          </SelectTrigger>
          <SelectContent>
            {Object.values(AppointmentType).map((type) => (
              <SelectItem key={type} value={type}>
                {t(`Department.${type}`)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* 2. Select Doctor (only show if specialty selected) */}
      {selectedSpecialty && (
        <DoctorSelector onDoctorSelect={handleDoctorSelect} specialty={selectedSpecialty} />
      )}

      {doctorId && (
        <div className="mb-4">
          <Label htmlFor="date" className="block text-sm font-medium">
            {t('dateLabel')}
          </Label>
          <SingleDatePicker
            value={new Date(date)}
            onChange={handleDateChange}
            placeholder={t('datePlaceholder')}
          />
        </div>
      )}

      {doctorId && date && (
        <AvailableTimeSlots
          doctorId={doctorId}
          date={date}
          selectedTime={selectedTime}
          onTimeSelect={setSelectedTime}
        />
      )}

      {doctorId && selectedTime && (
        <AppointmentForm
          patientId={user?.id}
          doctorId={doctorId}
          specialty={selectedSpecialty}
          date={date}
          selectedTime={selectedTime}
          handleAppointmentSubmit={handleAppointmentSubmit}
          error={error}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}
