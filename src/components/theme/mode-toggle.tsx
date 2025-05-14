'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useUserPreferencesStore from '@/store/user-store';
import { getPrefersColorScheme } from '@/lib/utils';

export function ModeToggle() {
  const { setTheme } = useTheme();
  const { preferences, setPreferences } = useUserPreferencesStore();

  const handleTheme = (theme: 'light' | 'dark' | 'system') => {
    setTheme(theme);
    const preferenceTheme = theme === 'system' ? getPrefersColorScheme() : theme;
    setPreferences({
      ...preferences,
      theme: preferenceTheme,
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => handleTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleTheme('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleTheme('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
