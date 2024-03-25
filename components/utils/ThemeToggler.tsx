'use client';

import { useTheme } from 'next-themes';
import { Button } from '../ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <div>
      <Button variant={'outline'} size={'icon'} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <SunIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
        <MoonIcon className='h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      </Button>
    </div>
  );
}
