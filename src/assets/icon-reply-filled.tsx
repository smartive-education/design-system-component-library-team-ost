import React, { FC } from 'react';
import { IconProps } from './icon-props';

export const IconReplyFilled: FC<IconProps> = ({ size = '16' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_413_277)">
      <path
        d="M8 0C3.6 0 0 3.1 0 7C0 10.9 3.6 14 8 14C8.4 14 8.8 14 9.1 13.9L14 16V11.6C15.2 10.4 16 8.8 16 7C16 3.1 12.4 0 8 0Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_413_277">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
