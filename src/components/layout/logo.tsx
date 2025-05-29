'use client';

import { cn } from '@/lib/utils/cn';
import { useLocale, useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { Cinzel } from 'next/font/google';
import { useEffect, useState } from 'react';

const cinzel = Cinzel({ weight: '700', subsets: ['latin'] });

export function Logo({ className, loading }: { className?: string; loading?: boolean }) {
  const { resolvedTheme } = useTheme();
  const t = useTranslations('Layout.Logo');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={className} />;
  }

  const svgStyle = isRtl
    ? { transform: 'scaleX(-1) translateX(-5%)' }
    : { transform: 'translateX(-10%)' };
  const textTransform = isRtl ? { transform: 'scaleX(-1) translateX(-50%)' } : undefined;

  return (
    <div style={svgStyle}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 500"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(className, cinzel.className)}
      >
        <circle cx="230" cy="310" r="90" fill="#13509A80" />
        <circle cx="140" cy="150" r="119" fill="#c00" />
        <circle
          cx={!isRtl ? '166' : '115'}
          cy="150"
          r="95"
          fill={resolvedTheme === 'dark' ? '#13509D' : '#2f619e'}
        />
        <circle cx="940" cy="210" r="59.5" fill="#11509A40" />

        <text
          x={!isRtl ? '265' : '200'}
          y={!isRtl ? '360' : '320'}
          textAnchor="start"
          fontFamily="DecoType Thuluth II, cinzel, sans-serif"
          fontSize="210px"
          fontWeight="600"
          letterSpacing={!isRtl ? '20px' : undefined}
          fill="currentColor"
          style={textTransform}
        >
          {t('name')}
        </text>
        <text
          x={!isRtl ? '200' : '280'}
          y="440"
          textAnchor="start"
          fontFamily="sans-serif"
          fontWeight="300"
          fontSize="55px"
          letterSpacing={!isRtl ? '13px' : undefined}
          fill="currentColor"
          style={textTransform}
        >
          {t('slogan')}
        </text>
      </svg>

      {loading && (
        <div
          className="flex items-center space-x-3"
          style={
            isRtl ? { transform: 'scaleX(-1) translateX(-15%)' } : { transform: 'translateX(5%)' }
          }
        >
          <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent" />
          <p className="text-base font-semibold sm:text-xl">{t('loading')}</p>
        </div>
      )}
    </div>
  );
}
