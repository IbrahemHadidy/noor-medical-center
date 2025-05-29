'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import contactBg from '@/assets/contact-bg.webp';

export function Contact() {
  const t = useTranslations('Home.Contact');

  return (
    <section className="bg-muted/10 relative w-full overflow-hidden py-16">
      {/* Optional background image or blurred clinic photo */}
      <Image
        src={contactBg}
        alt="Clinic contact background"
        fill
        className="absolute top-0 left-0 z-0 object-cover opacity-10"
      />

      <div className="relative z-10 container mx-auto grid gap-10 px-4 md:grid-cols-2">
        {/* Contact Info */}
        <motion.div
          className="flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">{t('title')}</h2>

          <p className="text-muted-foreground">{t('description')}</p>

          <div className="space-y-3 text-base">
            <div className="flex items-center space-x-2">
              <MapPin className="text-primary h-5 w-5" />
              <span>{t('address')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="text-primary h-5 w-5" />
              <span dir="ltr">{t('phone')}</span>
            </div>
            <p>{t('hours')}</p>
          </div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          className="overflow-hidden rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13603.404063539448!2d32.2705708!3d31.2652897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f99e7703c5d21f%3A0xd8c5fcd84d6492d!2sPort%20Said%2C%20Egypt!5e0!3m2!1sen!2seg!4v1714980000000!5m2!1sen!2seg"
            width="100%"
            height="350"
            className="dark:grayscale dark:invert-[90%]"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
