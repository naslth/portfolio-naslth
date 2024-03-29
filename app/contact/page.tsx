import Form from '@/components/page/contact/Form';
import { Mail, Home, PhoneCall } from 'lucide-react';

export default function ContactPage() {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 pt-12 lg:h-[480px] mb-6 xl:mb-24'>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              Say hello 👋
              <span className='w-[30px] h-[2px] bg-primary'></span>
            </div>
            <h1 className='h1 max-w-md mb-8'>Let&apos;s work together 💪</h1>
            <p className='sub max-w-[400px]'>
              Have questions, comments, or just want to get in touch? I&apos;d love to hear from you! Feel free to reach
              out to me using any of the methods below 😉
            </p>
          </div>
          <div className='hidden lg:flex w-full bg-contact_light dark:bg-contact_dark bg-contain bg-top bg-no-repeat'></div>
        </div>
        <div className='grid lg:grid-cols-2 mb-24 xl:mb-32'>
          <div className='flex flex-col gap-y-4 lg:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
            <div className='text-sm uppercase font-semibold text-primary tracking-[4px]'>Personal Infomation</div>
            <div className='flex items-center gap-x-8'>
              <Mail size={20} className='text-primary' />
              <a href='mailto:letrunghieu10x@gmail.com?subject=Me&body=Hello!'>letrunghieu10x@gmail.com</a>
            </div>
            <div className='flex items-center gap-x-8'>
              <Home size={20} className='text-primary' />
              <a href='http://maps.google.com/?q=My Dinh 2, Nam Tu Liem, Ha Noi'>My Dinh 2, Nam Tu Liem, Ha Noi</a>
            </div>
            <div className='flex items-center gap-x-8'>
              <PhoneCall size={20} className='text-primary' />
              <a href='tel:0376686112'>+84 376 686 112</a>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}
