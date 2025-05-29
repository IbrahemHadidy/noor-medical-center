'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image?: string | Blob;
}

interface TestimonialRaw {
  name: { en: string; ar: string };
  role: { en: string; ar: string };
  quote: { en: string; ar: string };
  rating: number;
  image?: string | Blob;
}

const TESTIMONIALS: TestimonialRaw[] = [
  {
    name: { en: 'Ali B.', ar: 'علي ب.' },
    role: { en: 'Patient', ar: 'مريض' },
    quote: {
      en: 'The team at Noor Medical Center explained every step clearly and put me at ease.',
      ar: 'فريق مركز نور الطبي شرح لي كل خطوة بشكل واضح وجعلني أشعر بالراحة.',
    },
    rating: 5,
  },
  {
    name: { en: 'Omar S.', ar: 'عمر س.' },
    role: { en: 'Patient', ar: 'مريض' },
    quote: {
      en: 'Excellent care, friendly staff, and modern facilities. Highly recommended!',
      ar: 'رعاية ممتازة وطاقم ودود ومرافق حديثة. أنصح به بشدة!',
    },
    rating: 4,
  },
  {
    name: { en: 'Khalid A.', ar: 'خالد أ.' },
    role: { en: 'Patient', ar: 'مريض' },
    quote: {
      en: 'I felt truly heard and looked after—five stars for compassion!',
      ar: 'شعرت بأنهم يستمعون إليّ ويعتنون بي حقًا—خمس نجوم للتعاطف!',
    },
    rating: 5,
  },
];

export function Testimonials() {
  const locale = useLocale();
  const t = useTranslations('Home.Testimonials');

  const items: Testimonial[] = TESTIMONIALS.map((raw) => ({
    name: raw.name[locale],
    role: raw.role[locale],
    quote: raw.quote[locale],
    rating: raw.rating,
    image: raw.image,
  }));

  return (
    <section className="bg-muted/10 w-full py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="mb-12 text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('title')}
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.blockquote
              key={i}
              className="bg-card flex flex-col justify-between rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Avatar + Quote */}
              <div className="mb-4 flex items-center space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={item.image} />
                  <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="text-card-foreground flex-1 italic">“{item.quote}”</p>
              </div>

              {/* Rating Stars */}
              <div className="mb-4 flex justify-center">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <span key={idx} className="text-primary text-xl">
                    ★
                  </span>
                ))}
                {Array.from({ length: 5 - item.rating }).map((_, idx) => (
                  <span key={idx} className="text-muted-foreground text-xl">
                    ☆
                  </span>
                ))}
              </div>

              {/* Footer */}
              <footer className="text-card-foreground text-sm font-semibold">
                {item.name}, <span className="font-normal">{item.role}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
