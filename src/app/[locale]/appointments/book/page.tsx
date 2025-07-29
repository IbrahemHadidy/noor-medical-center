import Booking from '@/components/pages/appointments/book/index';
import generatePageMetadata from '@/lib/utils/generate-page-metadata';
import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    namespace: 'Metadata.Booking',
    path: '/appointments/book',
  });
}

export default async function BookingPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Booking />;
}
