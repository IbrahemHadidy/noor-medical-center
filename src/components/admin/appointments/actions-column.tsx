'use client';

import { Button } from '@/components/ui/button';
import { useCancelAppointmentMutation } from '@/lib/api/endpoints/appointment';
import type { AppointmentWithUser } from '@/lib/types/appointement';
import { useTranslations } from 'next-intl';

export function ActionsColumn({ appt }: { appt: AppointmentWithUser }) {
  const t = useTranslations('PatientHistory');
  const [cancelAppt, { isLoading }] = useCancelAppointmentMutation();

  return (
    <Button
      size="sm"
      variant={appt.status === 'SCHEDULED' ? 'destructive' : 'secondary'}
      disabled={isLoading || appt.status !== 'SCHEDULED'}
      onClick={() => cancelAppt(appt.id)}
    >
      <p className="text-white">
        {appt.status === 'SCHEDULED' ? t('Actions.cancel') : t(`Status.${appt.status}`)}
      </p>
    </Button>
  );
}
