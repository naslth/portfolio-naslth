'use client';

import { usePathname } from 'next/navigation';
import Logo from '../utils/Logo';
import MobileNav from '../utils/MobileNav';
import Nav from '../utils/Nav';
import { ThemeToggler } from '../utils/ThemeToggler';
import { useEffect, useState } from 'react';

export default function Header() {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    const scrollYPos = () => {
      window.scrollY > 0 ? setHeader(true) : setHeader(false);
    };
    window.addEventListener('scroll', scrollYPos);
    return () => window.removeEventListener('scroll', scrollYPos);
  }, []);
  return (
    <header
      className={`${header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'} sticky top-0 z-30 transition-all`}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <Logo />
          <div className='flex items-center gap-x-6'>
            <Nav
              containerStyles='hidden lg:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <ThemeToggler />
            <div className='lg:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
