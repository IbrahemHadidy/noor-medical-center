import { ProtectedRoute } from '@/components/access/protected-route';
import Dashboard from '@/components/pages/dashboard/index';
import generatePageMetadata from '@/lib/utils/generate-page-metadata';
import { Role } from '@prisma/client';
import { type Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    namespace: 'Metadata.Dashboard',
    path: '/dashboard',
  });
}

export default async function DashboardPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProtectedRoute allowedRoles={[Role.ADMIN, Role.DOCTOR, Role.PATIENT]}>
      <Dashboard />
    </ProtectedRoute>
  );
}
