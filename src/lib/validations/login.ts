import type { useTranslations } from 'next-intl';
import { z } from 'zod';

type Translations = ReturnType<typeof useTranslations<'Login'>>;

export const createLoginSchema = (t: Translations) => {
  return z.object({
    identifier: z
      .string()
      .trim()
      .min(1, t('Errors.identifierRequired'))
      .refine(
        (val) => /^\+?[0-9]{7,15}$/.test(val) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        t('Errors.invalidIdentifier')
      ),
    password: z.string().min(8, {
      message: t('Errors.passwordLength', { minLength: 8 }),
    }),
  });
};

export type LoginData = z.infer<ReturnType<typeof createLoginSchema>>;
