import { motion } from 'framer-motion';
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
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
      className={`badge ${containerStyles}`}
    >
      <div className='xl:text-3xl text-2xl text-primary'>{icon}</div>
      <div className='flex items-center gap-x-2'>
        <div className='xl:text-4xl text-3xl leading-none font-bold text-primary'>
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className=' max-w-[70px] leading-none text-[15px] text-black'>{badgeText}</div>
      </div>
    </motion.div>
  );
}
