'use client';
import { Button } from '@/components/ui/button';
import { BsSend } from 'react-icons/bs';
import { HiOutlineDownload } from 'react-icons/hi';
import Link from 'next/link';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useTheme } from 'next-themes';
import Socials from '@/components/utils/Socials';
import { IoIosMan } from 'react-icons/io';
import { AiOutlineProject } from 'react-icons/ai';
import { IoBriefcase } from 'react-icons/io5';
import ImgBadge from '@/components/utils/ImgBadge';
import DevImg from '@/components/utils/DevImg';
import { TypeAnimation } from 'react-type-animation';
export default function DevSection() {
  const { theme } = useTheme();
  return (
    <section className={'h-[84vh] lg:pt-8 pt-4'}>
      <div className='relative w-full h-full py-4 sm:py-12 lg:py-24 bg-gradient-to-r from-[#ddd6f3] to-[#faaca8] bg dark:bg-none bg-no-repeat'>
        <div className='container mx-auto'>
          <div className='flex justify-between gap-8'>
            <div className='flex max-w[400px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left'>
              <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
                <span className='w-[30px] h-[2px] bg-primary'></span>
                <div className='text-sm uppercase font-semibold text-primary tracking-[4px]'>Web Developer</div>
                <span className='w-[30px] h-[2px] bg-primary'></span>
              </div>
              <h1 className='h1'>👋 Hello, I&apos;m </h1>
              <div className='h-10 mb-14 xl:mb-20'>
                <TypeAnimation
                  sequence={[
                    'Hieu',
                    2000,
                    'Software Engineering',
                    2000,
                    'Web Developer',
                    2000,
                    'Cloud/DevOps Engineering in the future :)',
                    2000
                  ]}
                  wrapper='span'
                  cursor={true}
                  repeat={Infinity}
                  className='h1'
                />
              </div>
              {/* add tech stack */}
              <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto lg:mx-0 mt-4 mb-12'>
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
                containerStyles='flex gap-x-6 mx-auto lg:mx-0'
                iconStyles='text-foreground text-[25px] hover:text-primary transition-all'
              />
            </div>
            <div className='hidden lg:flex relative w-[500px] h-[500px]'>
              <ImgBadge
                containerStyles='top-[10%] left-[0%]'
                icon={<IoIosMan />}
                endCountNum={22}
                badgeText='Years Old'
              />
              <ImgBadge
                containerStyles='top-[65%] right-[-5%]'
                icon={<IoBriefcase />}
                endCountNum={1}
                badgeText='Years Of Expreience'
              />
              <ImgBadge
                containerStyles='bottom-[10%] left-[5%]'
                icon={<AiOutlineProject />}
                endCountNum={1}
                badgeText='Projects'
                endCountText='+'
              />
              <DevImg />
            </div>
          </div>
          <div className='hidden md:flex absolute left-2/4 bottom-24 animate-bounce '>
            <RiArrowDownSLine className='text-3xl text-primary'></RiArrowDownSLine>
          </div>
        </div>
        <div className='dark:bg-none bg-bg_divider absolute bottom-[-1px] w-full lg:h-[150px] md:h-[120px] sm:h-[80px] h-[30px] bg-cover bg-center bg-no-repeat'></div>
      </div>
    </section>
  );
}
