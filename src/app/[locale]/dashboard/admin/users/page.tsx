import AdminUsers from '@/components/pages/dashboard/admin/users/index';
import generatePageMetadata from '@/lib/utils/generate-page-metadata';
import type { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    namespace: 'Metadata.AdminUsers',
    path: '/dashboard/admin/users',
  });
}

export default async function AdminUsersPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AdminUsers />;
}
