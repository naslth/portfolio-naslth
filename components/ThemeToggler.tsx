'use client';

import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Button>
        <SunIcon />
        <MoonIcon />
      </Button>
    </div>
  );
}
