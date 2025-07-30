'use client';

import type en from '@/locales/en.json';
import { motion } from 'framer-motion';
import { BadgeCheck, Clock, Cpu, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface Item {
  key: keyof typeof en.Home.WhyChooseUs.Items;
  icon: React.ReactNode;
}

const items: Item[] = [
  {
    key: 'ExperiencedStaff',
    icon: <Users className="text-primary h-10 w-10" />,
  },
  {
    key: 'ModernEquipment',
    icon: <Cpu className="text-primary h-10 w-10" />,
  },
  {
    key: '24_7Care',
    icon: <Clock className="text-primary h-10 w-10" />,
  },
  {
    key: 'PatientSatisfaction',
    icon: <BadgeCheck className="text-primary h-10 w-10" />,
  },
];

export function WhyChooseUs() {
  const t = useTranslations('Home.WhyChooseUs');

  return (
    <section className="bg-background w-full py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="mb-12 text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('title')}
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.key}
              className="bg-muted/10 flex flex-col items-center space-y-4 rounded-2xl p-6 shadow-sm backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {item.icon}
              <h3 className="text-xl font-semibold">{t(`Items.${item.key}.title`)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(`Items.${item.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
