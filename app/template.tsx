'use client';

import useScrollProgress from '@/hooks/useScrollProgress';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  display: { opacity: 1 }
};

export default function Template({ children }: { children: React.ReactNode }) {
  const scrollProgress = useScrollProgress();
  return (
    <div>
      <motion.main
        variants={variants}
        initial='hidden'
        animate='display'
        transition={{ type: 'linear, delay: 0.2, duration: 0.4' }}
      >
        {children}
      </motion.main>
      <span
        style={{ transform: `translateY(${scrollProgress - 100}%)` }}
        className='fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-500'
      ></span>
    </div>
  );
}
