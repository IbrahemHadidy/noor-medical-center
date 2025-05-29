'use client';

import { Button } from '@/components/ui/button';
import { Link } from '@/lib/i18n/navigation';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import heroBg from '@/assets/hero-bg.webp';

export function Hero() {
  const t = useTranslations('Home.Hero');

  return (
    <section className="text-foreground relative h-[100vh] w-full overflow-hidden">
      <Image
        src={heroBg}
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center bg-white/10 px-4 text-center dark:bg-black/60">
        <motion.h1
          className="mb-6 text-4xl font-bold drop-shadow-md md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('headline')}
        </motion.h1>

        <motion.p
          className="mb-8 text-lg drop-shadow-sm md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {t('subheadline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/register">
            <Button size="lg" className="bg-secondary text-foreground shadow-lg shadow-black/30">
              {t('getStarted')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
