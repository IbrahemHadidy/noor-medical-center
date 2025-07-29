import { Gender, Role } from '@prisma/client';
import type { useTranslations } from 'next-intl';
import { z } from 'zod';

type Translations = ReturnType<typeof useTranslations<'Register'>>;

export const createRegisterSchema = (t: Translations) => {
  return z.object({
    firstName: z
      .string()
      .trim()
      .min(3, {
        message: t('Errors.firstNameLength', { min: 3 }),
      })
      .refine((val) => val.length > 0, { message: t('Errors.requiredField') }),
    lastName: z
      .string()
      .trim()
      .min(3, {
        message: t('Errors.firstNameLength', { min: 3 }),
      })
      .refine((val) => val.length > 0, { message: t('Errors.requiredField') }),
    email: z
      .string()
      .trim()
      .email({
        message: t('Errors.invalidEmail'),
      })
      .refine((val) => val.length > 0, { message: t('Errors.requiredField') }),
    password: z
      .string()
      .min(8, {
        message: t('Errors.passwordMinLength', { min: 8 }),
      })
      .max(32, {
        message: t('Errors.passwordMaxLength', { max: 32 }),
      })
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/, {
        message: t('Errors.passwordComplexity'),
      })
      .refine((val) => val.length > 0, { message: t('Errors.requiredField') }),
    phone: z
      .string()
      .trim()
      .min(7, t('Errors.phoneTooShort'))
      .regex(/^\+?[0-9]{7,15}$/, t('Errors.invalidPhone'))
      .optional(),
    gender: z.enum(Gender, { error: t('Errors.genderRequired') }),
    role: z.enum(Role, { error: t('Errors.roleRequired') }),
  });
};

export type RegisterData = z.infer<ReturnType<typeof createRegisterSchema>>;
