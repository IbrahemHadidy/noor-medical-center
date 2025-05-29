'use client';

import { Logo } from '@/components/layout/logo';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';
import { Link } from '@/lib/i18n/navigation';
import { cn } from '@/lib/utils/cn';
import { PanelLeftIcon } from 'lucide-react';
import { DisplayModeSelector } from './display-mode-selector';
import { LanguageSelector } from './language-selector';

export function Header() {
  const { state, isMobile, openMobile, toggleSidebar } = useSidebar();

  return (
    <header className="bg-background/70 sticky top-0 z-50 flex w-full items-center justify-between p-4 shadow-md backdrop-blur-md transition-all duration-300">
      <Button
        variant="outline"
        size="icon"
        className={cn(
          'cursor-pointer bg-transparent transition duration-300 ease-in-out',
          state === 'expanded' && !isMobile ? 'pointer-events-none opacity-0' : ''
        )}
        onClick={toggleSidebar}
      >
        <PanelLeftIcon />
      </Button>

      <Link
        href="/"
        className={cn(
          'transform duration-300 ease-in-out',
          isMobile
            ? 'relative h-10 translate-y-[-10px]'
            : 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          (state === 'expanded' && !isMobile) || (openMobile && isMobile)
            ? 'pointer-events-none opacity-0'
            : ''
        )}
        aria-label="Homepage"
      >
        <Logo className={cn(isMobile ? 'h-14' : 'h-16', 'w-auto')} />
      </Link>

      <div className="flex items-center gap-4">
        <LanguageSelector />
        <DisplayModeSelector />
      </div>
    </header>
  );
}
