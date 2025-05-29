'use client';

import { Button } from '@/components/ui/button';
import { useVerifyAppointmentMutation } from '@/lib/api/endpoints/admin';
import type { AppointmentWithDoctor } from '@/lib/types/appointement';
import { AppointmentStatus } from '@generated/client';
import { useTranslations } from 'next-intl';

export function ActionsColumn({ appointment }: { appointment: AppointmentWithDoctor }) {
  const t = useTranslations('AdminAppointments');
  const [updateStatus, { isLoading }] = useVerifyAppointmentMutation();

  const handleChange = (newStatus: AppointmentStatus) => {
    updateStatus({ id: appointment.id, status: newStatus });
  };

  return (
    <div className="flex space-x-2">
      <Button
        variant="secondary"
        size="sm"
        disabled={isLoading || appointment.status === AppointmentStatus.DONE}
        onClick={() => handleChange(AppointmentStatus.DONE)}
      >
        <p className="text-white"> {t('Actions.markDone')}</p>
      </Button>
      <Button
        variant="destructive"
        size="sm"
        disabled={isLoading || appointment.status === AppointmentStatus.CANCELLED}
        onClick={() => handleChange(AppointmentStatus.CANCELLED)}
      >
        <p className="text-white">{t('Actions.cancel')}</p>
      </Button>
    </div>
  );
}
