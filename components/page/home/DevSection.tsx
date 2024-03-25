'use client';
import { Button } from '@/components/ui/button';
import { BsSend } from 'react-icons/bs';
import { HiOutlineDownload } from 'react-icons/hi';
import Link from 'next/link';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useTheme } from 'next-themes';
import Socials from '@/components/utils/Socials';

import { IoBriefcase } from 'react-icons/io5';
import ImgBadge from '@/components/utils/ImgBadge';
import DevImg from '@/components/utils/DevImg';
export default function DevSection() {
  const { theme } = useTheme();
  return (
    <section className={'h-[84vh] xl:pt-8 pt-4'}>
      <div className='relative w-full h-full py-4 sm:py-12 xl:py-24 bg-gradient-to-r from-[#ddd6f3] to-[#faaca8] bg dark:bg-none bg-no-repeat'>
        <div className='container mx-auto'>
          <div className='flex justify-between gap-8'>
            <div className='flex max-w[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left  '>
              <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Web Developer</div>
              <h1 className='h1'>Hello, I&apos;m Hieu </h1>
              <p className='sub max-w[490px] mx-auto xl:mx-0 mt-2'>
                I&apos;m a software engineer with a passion for web development. I&apos;m experienced with React,
                Next.js, and Tailwind CSS. I&apos;m also familiar with Node.js, Express, and PostgreSQL. I&apos;m always
                eager to learn new technologies and frameworks.
              </p>
              <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mt-4 mb-12'>
                <Link href='/contact'>
                  <Button className='hover:text-foreground dark:hover:text-secondary gap-x-2'>
                    Contact me <BsSend size={18} />
                  </Button>
                </Link>
                <Link href=''>
                  <Button variant={'secondary'} className='hover:text-primary gap-x-2'>
                    View my CV <HiOutlineDownload size={18} />
                  </Button>
                </Link>
              </div>
              <Socials
                containerStyles='flex gap-x-6 mx-auto xl:mx-0'
                iconStyles='text-foreground text-[25px] hover:text-primary transition-all'
              />
            </div>
            <div className='hidden xl:flex relative'>
              <ImgBadge containerStyles='top-[20%]' icon={<IoBriefcase />} />
              <DevImg />
            </div>
          </div>
          <div className='hidden md:flex absolute left-2/4 bottom-24 animate-bounce '>
            <RiArrowDownSLine className='text-3xl text-primary'></RiArrowDownSLine>
          </div>
        </div>
        <div className='dark:bg-none bg-bg_divider absolute bottom-[-1px] w-full xl:h-[150px] md:h-[120px] sm:h-[80px] h-[30px] bg-cover bg-center bg-no-repeat'></div>
      </div>
    </section>
  );
}
