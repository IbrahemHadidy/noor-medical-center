'use client';

import type en from '@/locales/en.json';
import { motion } from 'framer-motion';
import { HeartPulse, Scan, Stethoscope, Syringe } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import servicesBg from '@/assets/services-bg.webp';

interface Service {
  key: keyof typeof en.Home.Services.Items;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    key: 'GeneralPractice',
    icon: <Stethoscope className="text-primary h-8 w-8" />,
  },
  {
    key: 'Cardiology',
    icon: <HeartPulse className="text-primary h-8 w-8" />,
  },
  {
    key: 'Vaccinations',
    icon: <Syringe className="text-primary h-8 w-8" />,
  },
  {
    key: 'Radiology',
    icon: <Scan className="text-primary h-8 w-8" />,
  },
];

export function Services() {
  const t = useTranslations('Home.Services');

  return (
    <section className="bg-background relative w-full overflow-hidden py-16">
      <Image
        src={servicesBg}
        alt="Services background"
        fill
        className="absolute top-0 left-0 z-0 object-cover opacity-10"
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2
          className="mb-10 text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('title')}
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              className="border-border bg-muted/10 rounded-2xl border p-6 shadow-sm backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{t(`Items.${service.key}.title`)}</h3>
              <p className="text-muted-foreground text-sm">
                {t(`Items.${service.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
