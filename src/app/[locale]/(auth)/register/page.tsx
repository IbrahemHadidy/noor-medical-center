'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useRegisterSubmit } from '@/hooks/submitions/use-register-submit';
import { useFormWithValidation } from '@/hooks/use-form-with-validation';
import { Link } from '@/lib/i18n/navigation';
import { createRegisterSchema, type RegisterData } from '@/lib/validations/register';
import { Gender, Role } from '@generated/client';
import {
  Eye,
  EyeOff,
  HeartPulse,
  LoaderCircle,
  Lock,
  Mail,
  Mars,
  Phone,
  Stethoscope,
  UserPlus,
  UserRound,
  Venus,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

import medicalBg from '@/assets/auth-bg.webp';

export default function RegisterPage() {
  const locale = useLocale();
  const t = useTranslations('Register');
  const { handleRegister, isLoading, error } = useRegisterSubmit();
  const form = useFormWithValidation<RegisterData>(createRegisterSchema(t));
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isRtl = locale === 'ar';

  return (
    <div className="bg-background relative flex min-h-[calc(100vh-8rem)] items-center justify-center py-4">
      {/* Background */}
      <div className="fixed inset-0">
        <Image
          src={medicalBg}
          alt={t('backgroundAlt')}
          placeholder="blur"
          quality={80}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm dark:bg-black/60" />
      </div>

      <div className="bg-card relative z-10 w-full max-w-md space-y-6 rounded-2xl p-8 shadow-xl">
        <div className="space-y-2 text-center">
          <HeartPulse className="text-primary mx-auto h-12 w-12" />
          <h1 className="text-foreground text-3xl font-bold">{t('title')}</h1>
          <p className="text-muted-foreground">{t('subtitle')}</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleRegister)} className="space-y-6">
            <fieldset disabled={isLoading} className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">{t('firstName')}</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder={t('firstNamePlaceholder')}
                            {...field}
                            className="border-input bg-background border-2 ps-10 focus-visible:ring-[#00a3af]"
                          />
                          <UserRound className="text-primary absolute start-3 top-1/2 h-5 w-5 -translate-y-1/2" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">{t('lastName')}</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder={t('lastNamePlaceholder')}
                            {...field}
                            className="border-input bg-background border-2 ps-10 focus-visible:ring-[#00a3af]"
                          />
                          <UserRound className="text-primary absolute start-3 top-1/2 h-5 w-5 -translate-y-1/2" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">{t('email')}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="email"
                          placeholder={t('emailPlaceholder')}
                          {...field}
                          className="border-input bg-background border-2 ps-10 focus-visible:ring-[#00a3af]"
                        />
                        <Mail className="text-primary absolute start-3 top-1/2 h-5 w-5 -translate-y-1/2" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone Number */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">{t('phone')}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="tel"
                          dir={isRtl ? 'rtl' : 'ltr'}
                          placeholder={t('phonePlaceholder')}
                          {...field}
                          value={field.value ?? ''}
                          className="border-input bg-background border-2 ps-10 focus-visible:ring-[#00a3af]"
                        />
                        <Phone className="text-primary absolute start-3 top-1/2 h-5 w-5 -translate-y-1/2" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">{t('password')}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder={t('passwordPlaceholder')}
                          {...field}
                          className="border-input bg-background border-2 ps-10 focus-visible:ring-[#00a3af]"
                        />
                        <Lock className="text-primary absolute start-3 top-1/2 h-5 w-5 -translate-y-1/2" />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="text-muted-foreground hover:text-foreground absolute end-3 bottom-2.5"
                          tabIndex={-1}
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Gender */}
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">{t('gender')}</FormLabel>
                    <FormControl>
                      <RadioGroup
                        {...field}
                        className="flex gap-4"
                        dir={isRtl ? 'rtl' : 'ltr'}
                        onValueChange={field.onChange}
                      >
                        <div className="flex w-1/2 items-center space-x-2">
                          <RadioGroupItem
                            value={Gender.MALE}
                            id="male"
                            className="border-primary text-primary h-5 w-5 border-2"
                          />
                          <FormLabel htmlFor="male" className="flex items-center gap-2">
                            <Mars className="h-4 w-4" />
                            {t('male')}
                          </FormLabel>
                        </div>
                        <div className="flex w-1/2 items-center space-x-2">
                          <RadioGroupItem
                            value={Gender.FEMALE}
                            id="female"
                            className="border-primary text-primary h-5 w-5 border-2"
                          />
                          <FormLabel htmlFor="female" className="flex items-center gap-2">
                            <Venus className="h-4 w-4" />
                            {t('female')}
                          </FormLabel>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Role */}
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">{t('role')}</FormLabel>
                    <FormControl>
                      <RadioGroup
                        {...field}
                        className="flex gap-4"
                        dir={isRtl ? 'rtl' : 'ltr'}
                        onValueChange={field.onChange}
                      >
                        <div className="flex w-1/2 items-center space-x-2">
                          <RadioGroupItem
                            value={Role.DOCTOR}
                            id="doctor"
                            className="border-primary text-primary h-5 w-5 border-2"
                          />
                          <FormLabel htmlFor="doctor" className="flex items-center gap-2">
                            <Stethoscope className="h-4 w-4" />
                            {t('doctor')}
                          </FormLabel>
                        </div>
                        <div className="flex w-1/2 items-center space-x-2">
                          <RadioGroupItem
                            value={Role.PATIENT}
                            id="patient"
                            className="border-primary text-primary h-5 w-5 border-2"
                          />
                          <FormLabel htmlFor="patient" className="flex items-center gap-2">
                            <UserRound className="h-4 w-4" />
                            {t('patient')}
                          </FormLabel>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </fieldset>

            {error && <p className="text-destructive text-sm">{error}</p>}

            <Button
              type="submit"
              className="w-full text-white transition-colors"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  {t('creatingAccount')}
                </>
              ) : (
                <>
                  <UserPlus className="mr-2 h-4 w-4" />
                  {t('createAccountButton')}
                </>
              )}
            </Button>

            {/* Sign in link */}
            <div className="text-muted-foreground text-center text-sm">
              {t('alreadyHaveAccount')}{' '}
              <Link href="/login" className="text-primary hover:underline">
                {t('signIn')}
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
