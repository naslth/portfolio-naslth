import React from 'react';
import Image, { StaticImageData } from 'next/image';
export default function DevImg({ ImgSrc }: { ImgSrc: StaticImageData }) {
  return (
    <div className='relative bg-dev_bg_dark dark:bg-dev_bg w-[500px] h-[500px] bg-no-repeat bg-contain'>
      <div className='absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-65%] w-[250px] h-[250px]'>
        <Image
          src={ImgSrc}
          alt='Nas'
          layout='fill'
          objectFit='cover'
          objectPosition='70% 30%'
          className='rounded-full'
        />
      </div>
    </div>
  );
}
