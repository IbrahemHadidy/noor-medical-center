'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { VscColorMode } from 'react-icons/vsc';

export function DisplayModeSelector({ withLabel = false }: { withLabel?: boolean }) {
  const { setTheme, theme } = useTheme();
  const t = useTranslations('Layout.DisplayMode');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={withLabel ? 'default' : 'icon'} className="bg-transparent">
          {theme === 'system' ? (
            withLabel ? (
              <span className="flex items-center">
                <VscColorMode className="mr-2 h-4 w-4" />
                {t('system')}
              </span>
            ) : (
              <VscColorMode className="h-4 w-4" />
            )
          ) : theme === 'dark' ? (
            withLabel ? (
              <span className="flex items-center">
                <Moon className="mr-2 h-4 w-4" />
                {t('dark')}
              </span>
            ) : (
              <Moon className="h-4 w-4" />
            )
          ) : withLabel ? (
            <span className="flex items-center">
              <Sun className="mr-2 h-4 w-4" />
              {t('light')}
            </span>
          ) : (
            <Sun className="h-4 w-4" />
          )}
          {withLabel && <ChevronDown className="ms-2 h-4 w-4" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 h-4 w-4" />
          {t('light')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className="mr-2 h-4 w-4" />
          {t('dark')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <VscColorMode className="mr-2 h-4 w-4" />
          {t('system')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
