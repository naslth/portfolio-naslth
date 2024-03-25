import React, { ReactElement } from 'react';
import { IconType } from 'react-icons/lib';

type BadgeProps = {
  containerStyles?: string;
  icon?: ReactElement;
  endcountNum?: number;
  endCountText?: string;
  badgeText?: string;
};
export default function ImgBadge({ containerStyles, icon, endcountNum, endCountText, badgeText }: BadgeProps) {
  return <div className={`badge ${containerStyles}`}>Badge {icon}</div>;
}
