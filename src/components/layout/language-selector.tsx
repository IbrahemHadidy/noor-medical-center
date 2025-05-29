'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { routing } from '@/lib/i18n/routing';
import { Languages } from 'lucide-react';
import { type Locale, useLocale } from 'next-intl';

export function LanguageSelector() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const { locales, defaultLocale } = routing;

  const changeLocale = (newLocale: Locale) => {
    router.push(pathname, { locale: newLocale });
  };

  const localeNames = {
    en: 'English',
    ar: 'العربية',
  };

  return (
    <Select onValueChange={changeLocale} defaultValue={locale || defaultLocale}>
      <SelectTrigger className="hover:bg-accent w-32 transition">
        <Languages className="mr-2 h-4 w-4" /> <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {locales?.map((loc) => (
          <SelectItem key={loc} value={loc}>
            {localeNames[loc]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
