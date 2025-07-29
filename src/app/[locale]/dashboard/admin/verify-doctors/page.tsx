import VerifyDoctors from '@/components/pages/dashboard/admin/verify-doctors/index';
import generatePageMetadata from '@/lib/utils/generate-page-metadata';
import type { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    namespace: 'Metadata.VerifyDoctors',
    path: '/dashboard/admin/verify-doctors',
  });
}

export default async function VerifyDoctorsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <VerifyDoctors />;
}
