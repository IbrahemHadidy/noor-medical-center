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
import { useLoginSubmit } from '@/hooks/submitions/use-login-submit';
import { useFormWithValidation } from '@/hooks/use-form-with-validation';
import { Link } from '@/lib/i18n/navigation';
import { type LoginData, createLoginSchema } from '@/lib/validations/login';
import { Eye, EyeOff, LoaderCircle, Lock, LogIn, Stethoscope, UserRound } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

import medicalBg from '@/assets/auth-bg.webp';

export default function LoginPage() {
  const t = useTranslations('Login');
  const { handleLogin, isLoading, error } = useLoginSubmit();
  const form = useFormWithValidation<LoginData>(createLoginSchema(t));
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="relative flex min-h-[calc(100vh-8rem)] items-center justify-center py-4">
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

      {/* Form Card */}
      <div className="bg-card relative z-10 w-full max-w-md space-y-6 rounded-2xl border p-8 shadow-xl">
        <div className="space-y-2 text-center">
          <Stethoscope className="text-primary mx-auto h-12 w-12" aria-hidden="true" />
          <h1 className="text-foreground text-3xl font-bold">{t('title')}</h1>
          <p className="text-muted-foreground">{t('subtitle')}</p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleLogin)}
            className="space-y-6"
            aria-label={t('formAriaLabel')}
          >
            <fieldset disabled={isLoading} className="space-y-6">
              {/* Email Field */}
              <FormField
                control={form.control}
                name="identifier"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">{t('emailOrPhone')}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder={t('emailOrPhonePlaceholder')}
                          {...field}
                          className="border-input bg-background border-2 ps-10 focus-visible:ring-[#00a3af]"
                          aria-label={t('emailOrPhone')}
                        />
                        <UserRound className="text-primary absolute start-3 top-1/2 h-5 w-5 -translate-y-1/2" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
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
                          autoComplete="current-password"
                          placeholder={t('passwordPlaceholder')}
                          {...field}
                          className="border-input bg-background border-2 ps-10 focus-visible:ring-[#00a3af]"
                          aria-label={t('password')}
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
            </fieldset>

            {error && <p className="text-destructive text-sm">{error}</p>}

            {/* Submit Button */}
            <Button type="submit" className="w-full text-white" disabled={isLoading}>
              {isLoading ? (
                <>
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  {t('authenticating')}
                </>
              ) : (
                <>
                  <LogIn className="mr-2 h-4 w-4" />
                  {t('signInButton')}
                </>
              )}
            </Button>

            {/* Register Link */}
            <div className="text-muted-foreground text-center text-sm">
              {t('dontHaveAccount')}{' '}
              <Link href="/register" className="text-primary hover:underline">
                {t('registerNow')}
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
