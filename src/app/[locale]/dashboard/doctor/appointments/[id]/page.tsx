import DoctorAppointmentNotes from '@/components/pages/dashboard/doctor/appointment-notes/index';
import generatePageMetadata from '@/lib/utils/generate-page-metadata';
import type { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; id: string }>;
}) {
  const { locale, id } = await params;

  return generatePageMetadata({
    locale,
    namespace: 'Metadata.DoctorNotes',
    path: `/dashboard/doctor/appointments/${id}`,
  });
}

export default async function DoctorAppointmentNotesPage({
  params,
}: {
  params: Promise<{ locale: Locale; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  return <DoctorAppointmentNotes id={id} />;
}
