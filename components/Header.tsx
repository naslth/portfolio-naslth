'use client';

import { usePathname } from 'next/navigation';
import Logo from './Logo';
import MobileNav from './MobileNav';
import Nav from './Nav';
import { ThemeToggler } from './ThemeToggler';
import { useEffect, useState } from 'react';

export default function Header() {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const scrollYPos = () => {
      window.scrollY > 0 ? setHeader(true) : setHeader(false);
    };
    window.addEventListener('scroll', scrollYPos);
    return () => window.removeEventListener('scroll', scrollYPos);
  }, []);
  return (
    <header
      className={`${header ? 'py-4 shadow-lg dark: bg-accent' : 'py-6 dark:bg-transparent'} sticky top-0 z-30 transition-all`}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <Logo />
          <div className='flex items-center gap-x-6'>
            <Nav
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <div className='xl:hidden'>
              <MobileNav />
            </div>
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
}
