'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  useAddAvailabilityMutation,
  useGetDoctorAvailabilityQuery,
  useRemoveAvailabilityMutation,
} from '@/lib/api/endpoints/availability';
import { useAppSelector } from '@/lib/store';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function AvailabilityPage() {
  const { user } = useAppSelector((s) => s.auth);
  const t = useTranslations('DoctorAvailability');
  const doctorId = user?.id;

  const { data: slots = [] } = useGetDoctorAvailabilityQuery(doctorId ?? '');
  const [addSlot, { isLoading: isAdding }] = useAddAvailabilityMutation();
  const [removeSlot, { isLoading: isRemoving }] = useRemoveAvailabilityMutation();

  const [dayOfWeek, setDayOfWeek] = useState(1);
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('17:00');

  const handleAdd = () =>
    addSlot({ doctorId: doctorId ?? '', slot: { dayOfWeek, startTime, endTime } });

  if (!user?.id) {
    return <p className="p-4 text-center text-red-500">{t('Errors.notAuthenticated')}</p>;
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-4">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{t('title')}</h1>

      <div className="flex flex-col items-end gap-3 sm:flex-row">
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('dayLabel')}
            </label>
            <Select
              value={dayOfWeek.toString()}
              onValueChange={(value) => setDayOfWeek(Number(value))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={t('selectDay')} />
              </SelectTrigger>
              <SelectContent>
                {[...Array(7)].map((_, i) => (
                  <SelectItem key={i} value={i.toString()}>
                    {t(`days.${i}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('startTime')}
            </label>
            <Input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('endTime')}
            </label>
            <Input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
          </div>

          <div className="w-full self-end">
            <Button disabled={isAdding} onClick={handleAdd} className="w-full">
              <p className="text-white">{t('addSlot')}</p>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-4 border-t pt-4">
        <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
          {t('currentSlots')}
        </h2>

        {slots.length === 0 ? (
          <p className="py-4 text-center text-gray-500 dark:text-gray-400">{t('noSlots')}</p>
        ) : (
          <ul className="space-y-3">
            {slots.map((slot) => (
              <li
                key={slot.id}
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800"
              >
                <span className="text-gray-800 dark:text-white">
                  <span className="font-medium">{t(`days.${slot.dayOfWeek}`)}</span>:&nbsp;
                  {slot.startTime} – {slot.endTime}
                </span>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeSlot({ doctorId: doctorId ?? '', slotId: slot.id })}
                  disabled={isRemoving}
                >
                  {t('remove')}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
