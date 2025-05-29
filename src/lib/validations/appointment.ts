import type { useTranslations } from 'next-intl';
import { z } from 'zod';

type Translations = ReturnType<typeof useTranslations<'Booking'>>;

export const createAppointmentSchema = (t: Translations) => {
  return z.object({
    reason: z
      .string()
      .trim()
      .min(10, { message: t('Errors.reasonMin') }),
    price: z
      .number({ invalid_type_error: t('Errors.priceRequired') })
      .min(0, { message: t('Errors.pricePositive') }),
  });
};

export type AppointmentData = z.infer<ReturnType<typeof createAppointmentSchema>>;
