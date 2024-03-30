'use client';
import Link from 'next/link';
import React from 'react';
import { RiLinkedinFill, RiGithubFill, RiFacebookBoxFill, RiInstagramFill, RiTelegramFill } from 'react-icons/ri';
const icons = [
  { path: 'https://github.com/naslth', name: <RiGithubFill /> },
  { path: 'https://www.linkedin.com/in/naslth/', name: <RiLinkedinFill /> },
  { path: 'https://www.facebook.com/le.trung.hieu.21/', name: <RiFacebookBoxFill /> },
  { path: 'https://www.instagram.com/le.trung.hieu21/', name: <RiInstagramFill /> },
  { path: 'https://t.me/naslth', name: <RiTelegramFill /> }
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
