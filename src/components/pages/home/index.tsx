import { About } from './about';
import { Contact } from './contact';
import { CTA } from './cta';
import { Hero } from './hero';
import { Services } from './services';
import { Testimonials } from './testimonials';
import { WhyChooseUs } from './why-choose-us';

export default async function Home() {
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
