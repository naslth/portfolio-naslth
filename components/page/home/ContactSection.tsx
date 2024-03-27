import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className='py-24 bg-tertiary dark:bg-secondary/40'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <h2 className='h2 max-w-xl text-center mb-8'>
            👀 Ready to work together? Let&apos;s connect and make it happen 🤝
          </h2>
          <Link href='/contact'>
            <Button className='flex gap-x-2'>
              <div>Contact me</div>
              <span className='relative flex h-3 w-3'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75'></span>
                <span className='relative inline-flex rounded-full h-3 w-3 bg-white'></span>
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
