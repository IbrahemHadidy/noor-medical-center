import Register from '@/components/pages/auth/register/index';
import generatePageMetadata from '@/lib/utils/generate-page-metadata';
import type { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    namespace: 'Metadata.Register',
    path: '/register',
  });
}

export default async function RegisterPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Register />;
}
