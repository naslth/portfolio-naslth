'use client';
import { Button } from '@/components/ui/button';
import DevImg from '@/components/utils/DevImg';
import ImgBadge from '@/components/utils/ImgBadge';
import Socials from '@/components/utils/Socials';
import CSS from '@/public/css.svg';
import Dev from '@/public/dev.png';
import HTML from '@/public/html.svg';
import JAVA from '@/public/java.svg';
import JS from '@/public/js.svg';
import TS from '@/public/ts.svg';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineProject } from 'react-icons/ai';
import { BsSend } from 'react-icons/bs';
import { HiOutlineDownload } from 'react-icons/hi';
import { IoIosMan } from 'react-icons/io';
import { IoBriefcase } from 'react-icons/io5';
import { RiArrowDownSLine } from 'react-icons/ri';
import { TypeAnimation } from 'react-type-animation';
import { projectData } from './WorkSection';
export default function DevSection() {
  return (
    <section className='relative h-[600px] sm:h-[84vh] lg:pt-8 pt-4'>
      <div className='absolute w-full h-full  bg-gradient-to-r from-[#ddd6f3] to-[#faaca8] bg dark:bg-none bg-no-repeat z-[-2]'>
        <div className='dark:bg-none bg-bg_divider absolute bottom-[-1px] w-full lg:h-[150px] md:h-[120px] sm:h-[80px] h-[30px] bg-cover bg-center bg-no-repeat'></div>
      </div>
      <div className='container py-4 sm:py-12 lg:py-24 mx-auto z-10 trans  w-full h-full'>
        <div className='flex justify-between gap-8'>
          <div className='flex max-w[400px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left gap-y-3.5'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4 mx-auto lg:mx-0'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              <div className='text-sm uppercase font-semibold text-primary tracking-[4px]'>Web Developer</div>
              <span className='w-[30px] h-[2px] bg-primary'></span>
            </div>
            <h1 className='h1'>👋 Hello, I&apos;m </h1>
            <div className='h-10 mb-16 xl:mb-20'>
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

            <div className='flex flex-row gap-x-2 sm:gap-x-6 lg:gap-x-8 mb-4 mx-auto lg:mx-0 items-center'>
              <h1 className='h4'> Tech stack </h1>
              <span className='w-[2px] h-full bg-primary'></span>
              <Image src={HTML} alt='react' className='w-6 h-6 lg:w-10 lg:h-10' />
              <Image src={CSS} alt='react' className='w-6 h-6 lg:w-10 lg:h-10' />
              <Image src={JS} alt='react' className='w-6 h-6 lg:w-10 lg:h-10' />
              <Image src={TS} alt='react' className='w-6 h-6 lg:w-10 lg:h-10' />
              <Image src={JAVA} alt='react' className='w-6 h-6 lg:w-10 lg:h-10' />
            </div>
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto lg:mx-0 mt-4 mb-12'>
              <Link href='/contact'>
                <Button className='hover:text-foreground dark:hover:text-secondary gap-x-2'>
                  Contact me <BsSend size={18} />
                </Button>
              </Link>
              <a href='/Software_Engineer_Resume.pdf' download='LeTrungHieu_Software_Engineer_Resume'>
                <Button variant={'secondary'} className='hover:text-primary gap-x-2'>
                  View my CV <HiOutlineDownload size={18} />
                </Button>
              </a>
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
              endCountNum={projectData.length}
              badgeText='Mini Projects'
              endCountText='+'
            />
            <DevImg ImgSrc={Dev} />
          </div>
        </div>
        <div className='hidden md:flex absolute left-2/4 bottom-24 animate-bounce '>
          <RiArrowDownSLine className='text-3xl text-primary'></RiArrowDownSLine>
        </div>
      </div>
    </section>
  );
}
