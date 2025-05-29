'use client';

import { Button } from '@/components/ui/button';
import { useGetAvailableTimesQuery } from '@/lib/api/endpoints/dashboard';
import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface AvailableTimeSlotsProps {
  doctorId: string;
  date: string;
  selectedTime: string | null;
  onTimeSelect: (time: string | null) => void;
}

export default function AvailableTimeSlots({
  doctorId,
  date,
  selectedTime,
  onTimeSelect,
}: AvailableTimeSlotsProps) {
  const t = useTranslations('Booking');
  const { data: availableTimes, error, isLoading } = useGetAvailableTimesQuery({ doctorId, date });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <Loader2 className="h-5 w-5 animate-spin" />
        <p className="text-muted-foreground text-sm">{t('loadingSlots')}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-destructive/15 rounded-md p-4">
        <p className="text-destructive text-sm">{t('Errors.slotsLoadingFailed')}</p>
      </div>
    );
  }

  if (!availableTimes?.length) {
    return (
      <div className="bg-info/15 rounded-md p-4">
        <p className="text-info text-sm">{t('noAvailableSlots')}</p>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <label
        htmlFor="time"
        className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {t('timeLabel')}
      </label>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {availableTimes.map((time) => (
          <Button
            key={time}
            variant={selectedTime === time ? 'default' : 'outline'}
            size="sm"
            onClick={() => onTimeSelect(time === selectedTime ? null : time)}
          >
            <span className="text-white">{time}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
