'use client';

import { useGetPendingDoctorsQuery } from '@/lib/api/endpoints/admin';
import { Link } from '@/lib/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { DashboardCard } from './dashboard-card';

interface Props {
  stats?: {
    todayAppointments: number;
    totalDoctors: number;
    totalPatients: number;
    completedAppointments: number;
    pendingAppointments: number;
    cancelledAppointments: number;
    totalAppointments: number;
  };
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a4de6c'];

export function AdminDashboard({ stats }: Props) {
  const locale = useLocale();
  const t = useTranslations('Dashboard');
  const { data: doctors } = useGetPendingDoctorsQuery();

  const isRtl = locale === 'ar';

  // Process status data for charts
  const statusData = [
    { status: t('Admin.Chart.Status.scheduled'), count: stats?.todayAppointments || 0 },
    { status: t('Admin.Chart.Status.inProgress'), count: stats?.pendingAppointments || 0 },
    { status: t('Admin.Chart.Status.done'), count: stats?.completedAppointments || 0 },
    { status: t('Admin.Chart.Status.cancelled'), count: stats?.cancelledAppointments || 0 },
  ];

  const systemStatsData = [
    { category: t('Admin.Chart.doctors'), count: stats?.totalDoctors || 0 },
    { category: t('Admin.Chart.patients'), count: stats?.totalPatients || 0 },
    { category: t('Admin.Chart.today'), count: stats?.todayAppointments || 0 },
    { category: t('Admin.Chart.total'), count: stats?.totalAppointments || 0 },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Quick Stats Cards */}
      <DashboardCard title={t('Admin.pendingDoctors')}>
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold">{doctors?.length ?? 0}</p>
          <Link href="/dashboard/admin/verify-doctors" className="text-primary hover:underline">
            {t('Admin.verifyNow')}
          </Link>
        </div>
      </DashboardCard>

      <DashboardCard title={t('Admin.totalDoctors')}>
        <p className="text-3xl font-bold">{stats?.totalDoctors ?? 0}</p>
      </DashboardCard>

      <DashboardCard title={t('Admin.totalPatients')}>
        <p className="text-3xl font-bold">{stats?.totalPatients ?? 0}</p>
      </DashboardCard>

      {/* System Overview Chart */}
      <DashboardCard title={t('Admin.Chart.systemOverview')} className="lg:col-span-2">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={systemStatsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </DashboardCard>

      {/* Detailed Status Breakdown */}
      <DashboardCard title={t('Admin.Chart.statusBreakdown')}>
        <div className="h-[300px]">
          {statusData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  dataKey="count"
                  nameKey="status"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={
                    !isRtl
                      ? ({ status, percent }) => `${status}: ${(percent * 100).toFixed(0)}%`
                      : undefined
                  }
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-muted-foreground flex h-full items-center justify-center">
              {t('Admin.Chart.noData')}
            </p>
          )}
        </div>
      </DashboardCard>

      {/* Additional Stat Cards */}
      <DashboardCard title={t('Admin.todayAppointments')}>
        <p className="text-3xl font-bold">{stats?.todayAppointments ?? 0}</p>
      </DashboardCard>

      <DashboardCard title={t('Admin.completedAppointments')}>
        <p className="text-3xl font-bold">{stats?.completedAppointments ?? 0}</p>
      </DashboardCard>

      <DashboardCard title={t('Admin.cancelledAppointments')}>
        <p className="text-3xl font-bold">{stats?.cancelledAppointments ?? 0}</p>
      </DashboardCard>
    </div>
  );
}
