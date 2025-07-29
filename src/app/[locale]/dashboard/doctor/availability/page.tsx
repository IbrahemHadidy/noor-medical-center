import DoctorAvailability from '@/components/pages/dashboard/doctor/availability/index';
import generatePageMetadata from '@/lib/utils/generate-page-metadata';
import type { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    namespace: 'Metadata.DoctorAvailability',
    path: '/dashboard/doctor/availability',
  });
}

export default async function AvailabilityPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DoctorAvailability />;
}
