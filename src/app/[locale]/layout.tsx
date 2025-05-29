import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';
import { StoreProvider } from '@/components/store-provider';
import { SidebarProvider } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { routing } from '@/lib/i18n/routing';
import { cn } from '@/lib/utils/cn';
import { hasLocale, NextIntlClientProvider, type Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { Cairo, IBM_Plex_Sans, IBM_Plex_Sans_Arabic, Open_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';

const ibm = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});
const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['700'],
  display: 'swap',
});
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300'],
  display: 'swap',
});
const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400'],
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      dir={dir}
      className={cn(ibmArabic.className, openSans.className, ibm.className, cairo.className)}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground min-h-screen antialiased">
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <StoreProvider>
              <TooltipProvider delayDuration={0}>
                <SidebarProvider defaultOpen={false} className="flex w-full">
                  <Sidebar />
                  <div className="bg-background text-foreground flex min-h-screen w-full flex-col">
                    <Header />
                    {children}
                    <Footer />
                  </div>
                </SidebarProvider>
              </TooltipProvider>
            </StoreProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
