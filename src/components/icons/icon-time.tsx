import React, { FC } from 'react';
import { IconProps, IconSize } from './icon-props';

export const IconTime: FC<IconProps> = ({ size = IconSize.m }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_418_80)">
      <path
        d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346625 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9937 5.88022 15.1488 3.84906 13.6499 2.35014C12.1509 0.851219 10.1198 0.00633091 8 0ZM8 14C6.81332 14 5.65328 13.6481 4.66658 12.9888C3.67989 12.3295 2.91085 11.3925 2.45673 10.2961C2.0026 9.19974 1.88378 7.99334 2.11529 6.82946C2.3468 5.66557 2.91825 4.59647 3.75736 3.75736C4.59648 2.91824 5.66558 2.3468 6.82946 2.11529C7.99335 1.88378 9.19975 2.0026 10.2961 2.45672C11.3925 2.91085 12.3295 3.67988 12.9888 4.66658C13.6481 5.65327 14 6.81331 14 8C13.9953 9.58984 13.3616 11.1132 12.2374 12.2374C11.1132 13.3616 9.58984 13.9953 8 14Z"
        fill="currentColor"
      />
      <path
        d="M11.5 7H9V4.5C9 4.23478 8.89465 3.98043 8.70711 3.79289C8.51957 3.60536 8.26522 3.5 8 3.5C7.73479 3.5 7.48043 3.60536 7.2929 3.79289C7.10536 3.98043 7 4.23478 7 4.5V8C7 8.26522 7.10536 8.51957 7.2929 8.70711C7.48043 8.89464 7.73479 9 8 9H11.5C11.7652 9 12.0196 8.89464 12.2071 8.70711C12.3946 8.51957 12.5 8.26522 12.5 8C12.5 7.73478 12.3946 7.48043 12.2071 7.29289C12.0196 7.10536 11.7652 7 11.5 7Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_418_80">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
