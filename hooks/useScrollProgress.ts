import { useEffect, useState } from 'react';

export default function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  useEffect(() => {
    const updateScroll = () => {
      const curProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setScrollProgress(Number((curProgress / scrollHeight).toFixed(2)) * 100);
      }
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return scrollProgress;
}
