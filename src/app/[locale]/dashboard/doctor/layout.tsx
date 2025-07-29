import { ProtectedRoute } from '@/components/access/protected-route';
import { Role } from '@prisma/client';
import type { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default async function DoctorDashboardLayout({
  params,
  children,
}: {
  params: Promise<{ locale: Locale }>;
  children: React.ReactNode;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProtectedRoute allowedRoles={[Role.DOCTOR]}>{children}</ProtectedRoute>;
}
