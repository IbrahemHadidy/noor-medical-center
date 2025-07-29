'use client';

import { useGetAdminStatsQuery } from '@/lib/api/endpoints/admin';
import { useGetDoctorUpcomingQuery, useGetPatientNextQuery } from '@/lib/api/endpoints/dashboard';
import { useAppSelector } from '@/lib/store';
import { Role } from '@prisma/client';
import { useTranslations } from 'next-intl';
import { AdminDashboard } from './admin-dashboard';
import { DoctorDashboard } from './doctor-dashboard';
import { PatientDashboard } from './patient-dashboard';

export default function Dashboard() {
  const t = useTranslations('Dashboard');
  const { user } = useAppSelector((state) => state.auth);

  const doctorQuery = useGetDoctorUpcomingQuery(undefined, { skip: user?.role !== Role.DOCTOR });
  const patientQuery = useGetPatientNextQuery(undefined, { skip: user?.role !== Role.PATIENT });
  const adminQuery = useGetAdminStatsQuery(undefined, { skip: user?.role !== Role.ADMIN });

  const isLoading = doctorQuery.isLoading || patientQuery.isLoading || adminQuery.isLoading;
  const isError = doctorQuery.error || patientQuery.error || adminQuery.error;

  if (isLoading) {
    return <div className="flex justify-center p-8">{t('loading')}</div>;
  }

  if (isError) {
    return <div className="flex justify-center p-8">{t('Errors.loadingFailed')}</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">{t('welcome', { name: user?.firstName ?? '' })}</h1>

      {user?.role === Role.DOCTOR && (
        <DoctorDashboard data={doctorQuery.data} isVerified={!!user?.doctorVerifiedAt} />
      )}
      {user?.role === Role.PATIENT && <PatientDashboard nextAppointment={patientQuery.data} />}
      {user?.role === Role.ADMIN && <AdminDashboard stats={adminQuery.data} />}
    </div>
  );
}
