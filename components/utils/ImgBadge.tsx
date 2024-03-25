import React, { ReactElement } from 'react';
import CountUp from 'react-countup';
type BadgeProps = {
  containerStyles?: string;
  icon?: ReactElement;
  endCountNum: number;
  endCountText?: string;
  badgeText?: string;
};
export default function ImgBadge({ containerStyles, icon, endCountNum, endCountText, badgeText }: BadgeProps) {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className='text-3xl text-primary'>{icon}</div>
      <div className='flex items-center gap-x-2'>
        <div className='text-4xl leading-none font-bold text-primary'>
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className=' max-w-[70px] leading-none text-[15px] text-black'>{badgeText}</div>
      </div>
    </div>
  );
}
