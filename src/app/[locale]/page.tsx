import { About } from '@/components/landing/about';
import { Contact } from '@/components/landing/contact';
import { CTA } from '@/components/landing/cta';
import { Hero } from '@/components/landing/hero';
import { Services } from '@/components/landing/services';
import { Testimonials } from '@/components/landing/testimonials';
import { WhyChooseUs } from '@/components/landing/why-choose-us';
import generatePageMetadata from '@/lib/utils/generate-page-metadata';
import type { Locale } from 'next-intl';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    namespace: 'Metadata.Home',
    path: '/',
  });
}

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <CTA />
    </main>
  );
}
