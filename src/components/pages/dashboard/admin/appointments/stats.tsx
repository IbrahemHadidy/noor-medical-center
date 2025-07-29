import type { AdminStats } from '@/lib/types/dashboard';
import { useTranslations } from 'next-intl';

export function stats({
  t,
  statsData,
}: {
  t: ReturnType<typeof useTranslations<'AdminAppointments'>>;
  statsData?: AdminStats;
}) {
  return [
    { label: t('Stats.total'), value: statsData?.totalAppointments.toString() ?? '0' },
    { label: t('Stats.today'), value: statsData?.todayAppointments.toString() ?? '0' },
    { label: t('Stats.completed'), value: statsData?.completedAppointments.toString() ?? '0' },
    { label: t('Stats.cancelled'), value: statsData?.cancelledAppointments.toString() ?? '0' },
  ];
}
