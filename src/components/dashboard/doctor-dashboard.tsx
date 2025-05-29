'use client';

import { Link } from '@/lib/i18n/navigation';
import type { AppointmentRow } from '@/lib/types/appointement';
import type { AppointmentType } from '@generated/client';
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
import { DashboardCard } from './dashboard-card';

interface Props {
  data?: AppointmentRow[];
  isVerified: boolean;
}

export function DoctorDashboard({ data = [], isVerified }: Props) {
  const t = useTranslations('Dashboard');

  // Process data for bar chart (monthly appointments)
  const monthlyData = data.reduce(
    (acc, appointment) => {
      const date = new Date(appointment.scheduledFor);
      const month = date.toLocaleString('default', { month: 'short' });
      const existing = acc.find((item) => item.name === month);

      if (existing) {
        existing.appointments += 1;
      } else {
        acc.push({ name: month, appointments: 1 });
      }
      return acc;
    },
    [] as { name: string; appointments: number }[]
  );

  // Pie chart data processing
  const typeData = Object.entries(
    data.reduce(
      (acc, appointment) => {
        const type = appointment.type || 'other';
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    )
  ).map(([type, count]) => {
    const colorMap: Record<string, string> = {
      consultation: '#8884d8',
      'follow-up': '#82ca9d',
      emergency: '#ff8042',
      other: '#ffc658',
    };

    return {
      type,
      name: t(`Doctor.Chart.Type.${type as AppointmentType}`),
      value: count,
      color: colorMap[type] || '#cccccc',
    };
  });

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Verification status card */}
      <DashboardCard title={t('Doctor.verificationStatus')}>
        {isVerified ? (
          <p className="text-primary">{t('Doctor.verified')}</p>
        ) : (
          <p className="text-destructive">{t('Doctor.notVerified')}</p>
        )}
      </DashboardCard>

      {/* View Appointments */}
      <DashboardCard title={t('Doctor.yourAppointments')} className="lg:col-span-2">
        <Link href="/dashboard/doctor/appointments" className="text-primary hover:underline">
          {t('Doctor.viewAppointments')}
        </Link>
      </DashboardCard>

      {/* Monthly appointments chart */}
      <DashboardCard title={t('Doctor.Chart.monthlyTitle')} className="lg:col-span-2">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                formatter={(value) => [`${value} ${t('Doctor.Chart.appointments')}`, '']}
                labelFormatter={(label) => t('Doctor.Chart.month', { month: label })}
              />
              <Bar dataKey="appointments" fill="#8884d8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </DashboardCard>

      {/* Appointment types pie chart */}
      <DashboardCard title={t('Doctor.Chart.typeTitle')}>
        <div className="h-[300px]">
          {data.length ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={typeData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {typeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [value, t('Doctor.Chart.appointments')]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-muted-foreground flex h-full items-center justify-center">
              {t('Doctor.noAppointments')}
            </p>
          )}
        </div>
      </DashboardCard>
    </div>
  );
}
