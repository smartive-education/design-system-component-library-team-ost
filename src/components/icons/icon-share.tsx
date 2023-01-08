import React, { FC } from 'react';
import { IconProps, IconSize } from './icon-props';

export const IconShare: FC<IconProps> = ({ size = IconSize.m }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 6C13.654 6 15 4.654 15 3C15 1.346 13.654 0 12 0C10.346 0 9 1.346 9 3C9 3.224 9.029 3.44 9.075 3.65L5.856 5.661C5.344 5.254 4.704 5 4 5C2.346 5 1 6.346 1 8C1 9.654 2.346 11 4 11C4.704 11 5.344 10.746 5.856 10.339L9.075 12.351C9.029 12.56 9 12.776 9 13C9 14.654 10.346 16 12 16C13.654 16 15 14.654 15 13C15 11.346 13.654 10 12 10C11.296 10 10.657 10.254 10.144 10.661L6.925 8.649C6.971 8.44 7 8.223 7 8C7 7.776 6.971 7.56 6.925 7.351L10.145 5.339C10.657 5.746 11.296 6 12 6ZM12 2C12.551 2 13 2.448 13 3C13 3.552 12.551 4 12 4C11.449 4 11 3.552 11 3C11 2.448 11.449 2 12 2ZM4 9C3.449 9 3 8.552 3 8C3 7.448 3.449 7 4 7C4.551 7 5 7.448 5 8C5 8.552 4.551 9 4 9ZM12 12C12.551 12 13 12.448 13 13C13 13.552 12.551 14 12 14C11.449 14 11 13.552 11 13C11 12.448 11.449 12 12 12Z"
      fill="currentColor"
    />
  </svg>
);
