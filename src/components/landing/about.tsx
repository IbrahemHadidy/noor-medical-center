'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import clinicImage from '@/assets/about-us.webp';

export function About() {
  const t = useTranslations('Home.About');

  return (
    <section className="bg-muted/10 w-full py-16">
      <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-10 overflow-hidden px-4 md:flex-row">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t('title')}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{t('description')}</p>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-xl">
            <Image src={clinicImage} alt="Clinic photo" fill className="object-cover" />

            <div className="absolute inset-0 bg-white/10 dark:bg-black/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
