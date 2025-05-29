'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { useGetPatientHistoryQuery } from '@/lib/api/endpoints/appointment';
import { Link } from '@/lib/i18n/navigation';
import { AppointmentStatus, AppointmentType } from '@generated/client';
import { format, parse } from 'date-fns';
import { useTranslations } from 'next-intl';
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
import { DashboardCard } from '../dashboard/dashboard-card';

interface Props {
  nextAppointment?: {
    doctorName: string;
    scheduledFor: string;
  } | null;
}

const COLORS = [
  '#8884d8', // purple
  '#82ca9d', // green
  '#ffc658', // yellow
  '#ff8042', // orange
  '#a4de6c', // light green
  '#d0ed57', // lime
  '#83a6ed', // blue
  '#8dd1e1', // light blue
  '#ffc0cb', // pink
  '#ff7f50', // coral
  '#87cefa', // sky blue
];

export function PatientDashboard({ nextAppointment }: Props) {
  const t = useTranslations('Dashboard.Patient');

  // Fetch all appointment history
  const { data: response, isLoading, isError } = useGetPatientHistoryQuery({ all: true });

  // Process data for charts
  const chartData = {
    monthly: [] as { month: string; count: number }[],
    types: [] as { type: string; count: number }[],
    statuses: [] as { status: string; count: number }[],
  };

  if (response?.data?.length && response.data.length > 0) {
    // Monthly appointments
    const monthlyCounts: Record<string, number> = {};

    // Appointment types
    const typeCounts: Partial<Record<AppointmentType, number>> = Object.values(
      AppointmentType
    ).reduce((acc, type) => ({ ...acc, [type]: 0 }), {});

    // Appointment statuses
    const statusCounts: Partial<Record<AppointmentStatus, number>> = Object.values(
      AppointmentStatus
    ).reduce((acc, status) => ({ ...acc, [status]: 0 }), {});

    response?.data.forEach((appointment) => {
      // Monthly counts
      const month = format(new Date(appointment?.scheduledFor ?? ''), 'MMM yyyy');
      monthlyCounts[month] = (monthlyCounts[month] || 0) + 1;

      // Type counts
      const type = appointment.type;
      typeCounts[type] = (typeCounts[type] || 0) + 1;

      // Status counts
      const status = appointment.status;
      statusCounts[status] = (statusCounts[status] || 0) + 1;
    });

    // Convert to sorted arrays
    chartData.monthly = Object.entries(monthlyCounts)
      .map(([month, count]) => ({ month, count }))
      .sort(
        (a, b) =>
          parse(a.month, 'MMM yyyy', new Date()).getTime() -
          parse(b.month, 'MMM yyyy', new Date()).getTime()
      );

    chartData.types = Object.entries(typeCounts).map(([type, count]) => ({
      type: t(`Type.${type as AppointmentType}`) || type,
      count,
    }));

    chartData.statuses = Object.entries(statusCounts).map(([status, count]) => ({
      status: t(`StatusOptions.${status as AppointmentStatus}`) || status,
      count,
    }));
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard title={t('nextAppointment')}>
          <Skeleton className="h-6 w-full" />
        </DashboardCard>

        <DashboardCard title={t('bookLink')}>
          <Skeleton className="h-6 w-full" />
        </DashboardCard>

        <DashboardCard title={t('historyLink')}>
          <Skeleton className="h-6 w-full" />
        </DashboardCard>

        <DashboardCard title={t('Chart.monthlyTitle')} className="lg:col-span-2">
          <Skeleton className="h-[300px] w-full" />
        </DashboardCard>

        <DashboardCard title={t('Chart.typeTitle')}>
          <Skeleton className="h-[300px] w-full" />
        </DashboardCard>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <DashboardCard key={i} title={`Card ${i}`}>
            <p className="text-destructive">{t('Common.fetchError')}</p>
          </DashboardCard>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Next appointment */}
      <DashboardCard title={t('nextAppointment')}>
        {nextAppointment?.doctorName && nextAppointment?.scheduledFor ? (
          <p>
            {t('nextAppointmentWith')} {nextAppointment.doctorName}{' '}
            {format(new Date(nextAppointment.scheduledFor), 'PPP p')}
          </p>
        ) : (
          <p>{t('noUpcoming')}</p>
        )}
      </DashboardCard>

      {/* Book new appointment */}
      <DashboardCard title={t('bookLink')}>
        <Link href="/appointments/book" className="text-primary hover:underline">
          {t('bookNew')}
        </Link>
      </DashboardCard>

      {/* View history */}
      <DashboardCard title={t('historyLink')}>
        <Link href="/dashboard/patient/history" className="text-primary hover:underline">
          {t('viewHistory')}
        </Link>
      </DashboardCard>

      {/* Appointments Over Time */}
      <DashboardCard title={t('Chart.monthlyTitle')} className="lg:col-span-2">
        <div className="h-[300px]">
          {chartData.monthly.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData.monthly}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-muted-foreground flex h-full items-center justify-center">
              {t('Chart.noData')}
            </p>
          )}
        </div>
      </DashboardCard>

      {/* Appointment Types */}
      <DashboardCard title={t('Chart.typeTitle')}>
        <div className="h-[300px]">
          {chartData.types.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData.types}
                  dataKey="count"
                  nameKey="type"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                >
                  {chartData.types.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-muted-foreground flex h-full items-center justify-center">
              {t('Chart.noData')}
            </p>
          )}
        </div>
      </DashboardCard>
    </div>
  );
}
