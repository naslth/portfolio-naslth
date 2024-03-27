import React from 'react';
import Dev from '@/public/dev.png';
import Image from 'next/image';
export default function DevImg() {
  return (
    <div className='relative bg-dev_bg_dark dark:bg-dev_bg w-[500px] h-[500px] bg-no-repeat bg-contain'>
      <Image
        src={Dev}
        alt='Nas'
        width={250}
        height={250}
        className='absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-65%] rounded-full'
      />
    </div>
  );
}
