import { AuthRoute } from '@/components/access/auth-route';
import type { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default async function AuthLayout({
  params,
  children,
}: {
  params: Promise<{ locale: Locale }>;
  children: React.ReactNode;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <AuthRoute>
      <main className="container mx-auto flex-grow">{children}</main>
    </AuthRoute>
  );
}
