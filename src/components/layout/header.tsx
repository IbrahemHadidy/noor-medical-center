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
  const { open, openMobile, isMobile, toggleSidebar } = useSidebar();

  return (
    <header className="bg-background/70 sticky top-0 z-50 flex w-full items-center justify-between p-4 shadow-md backdrop-blur-md transition-all duration-300">
      <Button
        variant="outline"
        size="icon"
        className={cn(
          'cursor-pointer bg-transparent transition duration-300 ease-in-out',
          isMobile && openMobile && 'pointer-events-none opacity-0',
          !isMobile && open && 'pointer-events-none opacity-0'
        )}
        onClick={toggleSidebar}
      >
        <PanelLeftIcon />
      </Button>

      {/* Centered Logo */}
      <Link
        href="/"
        className={cn(
          'transition duration-300 ease-in-out',
          'max-md:mx-auto max-md:-mt-3.5 max-md:h-10 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2',
          isMobile && openMobile && 'pointer-events-none opacity-0',
          !isMobile && open && 'pointer-events-none opacity-0'
        )}
        aria-label="Homepage"
      >
        <Logo className={cn(isMobile ? 'h-14' : 'h-16', 'w-auto')} />
      </Link>

      {/* Right section only on desktop */}
      {!isMobile && (
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <DisplayModeSelector />
        </div>
      )}
    </header>
  );
}
