'use client';
import Link from 'next/link';
import React from 'react';
import { RiLinkedinFill, RiGithubFill, RiFacebookBoxFill, RiInstagramFill, RiTelegramFill } from 'react-icons/ri';
const icons = [
  { path: '/', name: <RiGithubFill /> },
  { path: '/', name: <RiLinkedinFill /> },
  { path: '/', name: <RiFacebookBoxFill /> },
  { path: '/', name: <RiInstagramFill /> },
  { path: '/', name: <RiTelegramFill /> }
];

type SocialProps = {
  containerStyles?: string;
  iconStyles?: string;
};
export default function Socials({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div className={containerStyles}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={iconStyles}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
}
