'use client';

import { Button } from '@/components/ui/button';
import { Link } from '@/lib/i18n/navigation';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import ctaBg from '@/assets/cta-bg.webp';

export function CTA() {
  const t = useTranslations('Home.CTA');

  return (
    <section className="text-foreground relative w-full overflow-hidden py-20">
      {/* Background image */}
      <Image
        src={ctaBg}
        alt="Doctor Background"
        fill
        className="z-0 object-cover object-center"
        priority
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 z-10 bg-white/10 dark:bg-black/60" />

      {/* CTA Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.h2
          className="mb-4 text-3xl font-bold drop-shadow-md md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('title')}
        </motion.h2>

        <motion.p
          className="mb-8 text-lg drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t('description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/register">
            <Button size="lg" className="bg-secondary text-foreground shadow-lg shadow-black/30">
              {t('button')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
