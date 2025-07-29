import type { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default async function DashboardLayout({
  params,
  children,
}: {
  params: Promise<{ locale: Locale }>;
  children: React.ReactNode;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <main className="container mx-auto flex-grow p-2 md:p-4">{children}</main>;
}
