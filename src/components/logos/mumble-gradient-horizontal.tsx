import React, { FC } from 'react';
import { LogoProps } from './logo-props';

export const MumbleGradientHorizontal: FC<LogoProps> = ({ onClick }) => (
  <svg
    className={onClick ? 'cursor-pointer' : 'cursor-default'}
    onClick={onClick}
    width="100%"
    height="100%"
    viewBox="0 0 335 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_447_517)">
      <path
        d="M37.3333 40H26.6667C25.1406 40 23.7708 40.849 23.0885 42.2135C22.4062 43.5755 22.5521 45.1823 23.4661 46.3985L28.7995 53.513C29.5625 54.5287 30.7291 55.112 32 55.112C33.2709 55.112 34.4375 54.5287 35.2005 53.5104L40.5339 46.401C41.4479 45.1823 41.5938 43.5755 40.9115 42.2135C40.2292 40.849 38.8594 40 37.3333 40Z"
        fill="#7C3AED"
      />
      <path
        d="M60.8958 25.7214C60.1877 23.8527 59.3084 21.9657 58.2887 20.1138C61.7077 18.3183 64 14.7352 64 10.6667C64 4.78387 59.2161 0 53.3333 0C49.492 0 45.9251 2.24267 43.9906 5.5568C40.4551 3.7544 36.4598 2.66667 32 2.66667C27.5402 2.66667 23.5451 3.75456 20.0094 5.5568C18.0749 2.24267 14.508 0 10.6667 0C4.78387 0 0 4.78387 0 10.6667C0 14.7347 2.29168 18.3177 5.70997 20.1133C4.68979 21.9653 3.81021 23.8525 3.10157 25.7214C0.109387 33.625 -2.22656 44.8281 3.64845 53.3359C8.53387 60.4115 18.0729 64 32 64C45.9271 64 55.4661 60.4115 60.3516 53.3359C66.2266 44.8281 63.888 33.625 60.8958 25.7214ZM55.9635 50.3047C52.1328 55.8542 44.0703 58.6667 32 58.6667C19.9297 58.6667 11.8672 55.8542 8.03645 50.3047C3.47656 43.7031 5.54947 34.3203 8.08853 27.612C9.33072 24.3359 16.3203 8 32 8C47.6797 8 54.6693 24.3359 55.9115 27.612C58.4505 34.3203 60.5234 43.7031 55.9635 50.3047Z"
        fill="#7C3AED"
      />
      <path
        d="M25.7031 33.013C28.1094 29.5911 28.3177 28.2291 27.7161 25.875C26.5755 21.4089 23.7318 20.4713 21.5495 20.4713C16.1276 20.4713 11.8984 27.789 11.8463 31.4479C11.8151 33.6458 12.7031 35.9349 14.1693 37.4218C15.1979 38.4635 16.4062 39.0156 17.6666 39.0156C21.0339 39.0156 23.6198 35.9818 25.7031 33.013Z"
        fill="#7C3AED"
      />
      <path
        d="M42.4505 20.4714C40.2682 20.4714 37.4245 21.4089 36.2839 25.875C35.6823 28.2292 35.8906 29.5911 38.2969 33.013C40.3802 35.9818 42.9662 39.0157 46.3333 39.0157C47.5938 39.0157 48.8021 38.4636 49.8307 37.4219C51.2969 35.9349 52.1849 33.6458 52.1536 31.4505C52.1016 27.7891 47.8724 20.4714 42.4505 20.4714Z"
        fill="#7C3AED"
      />
    </g>
    <path
      d="M138.88 10.496V55.424H127.936V28.48L117.888 55.424H109.056L98.944 28.416V55.424H88V10.496H100.928L113.536 41.6L126.016 10.496H138.88Z"
      fill="url(#paint0_linear_447_517)"
    />
    <path
      d="M178.174 19.712V55.424H167.23V50.56C166.121 52.1387 164.606 53.4187 162.686 54.4C160.809 55.3387 158.718 55.808 156.414 55.808C153.683 55.808 151.273 55.2107 149.182 54.016C147.091 52.7787 145.47 51.008 144.318 48.704C143.166 46.4 142.59 43.6907 142.59 40.576V19.712H153.47V39.104C153.47 41.4934 154.089 43.3494 155.326 44.672C156.563 45.9947 158.227 46.656 160.318 46.656C162.451 46.656 164.137 45.9947 165.374 44.672C166.611 43.3494 167.23 41.4934 167.23 39.104V19.712H178.174Z"
      fill="url(#paint1_linear_447_517)"
    />
    <path
      d="M227.763 19.328C232.2 19.328 235.72 20.672 238.323 23.36C240.968 26.048 242.291 29.7814 242.291 34.56V55.424H231.411V36.032C231.411 33.728 230.792 31.9574 229.555 30.72C228.36 29.44 226.696 28.8 224.563 28.8C222.43 28.8 220.744 29.44 219.507 30.72C218.312 31.9574 217.715 33.728 217.715 36.032V55.424H206.835V36.032C206.835 33.728 206.216 31.9574 204.979 30.72C203.784 29.44 202.12 28.8 199.987 28.8C197.854 28.8 196.168 29.44 194.931 30.72C193.736 31.9574 193.139 33.728 193.139 36.032V55.424H182.195V19.712H193.139V24.192C194.248 22.6987 195.699 21.5254 197.491 20.672C199.283 19.776 201.31 19.328 203.571 19.328C206.259 19.328 208.648 19.904 210.739 21.056C212.872 22.208 214.536 23.8507 215.731 25.984C216.968 24.0214 218.654 22.4214 220.787 21.184C222.92 19.9467 225.246 19.328 227.763 19.328Z"
      fill="url(#paint2_linear_447_517)"
    />
    <path
      d="M257.049 24.768C258.073 23.104 259.545 21.76 261.465 20.736C263.385 19.712 265.582 19.2 268.057 19.2C271.001 19.2 273.668 19.9467 276.057 21.44C278.446 22.9334 280.324 25.0667 281.689 27.84C283.097 30.6134 283.801 33.8347 283.801 37.504C283.801 41.1734 283.097 44.416 281.689 47.232C280.324 50.0054 278.446 52.16 276.057 53.696C273.668 55.1894 271.001 55.936 268.057 55.936C265.54 55.936 263.342 55.4454 261.465 54.464C259.588 53.44 258.116 52.096 257.049 50.432V55.424H246.105V8.06403H257.049V24.768ZM272.665 37.504C272.665 34.7734 271.897 32.64 270.361 31.104C268.868 29.5254 267.012 28.736 264.793 28.736C262.617 28.736 260.761 29.5254 259.225 31.104C257.732 32.6827 256.985 34.8374 256.985 37.568C256.985 40.2987 257.732 42.4534 259.225 44.032C260.761 45.6107 262.617 46.4 264.793 46.4C266.969 46.4 268.825 45.6107 270.361 44.032C271.897 42.4107 272.665 40.2347 272.665 37.504Z"
      fill="url(#paint3_linear_447_517)"
    />
    <path d="M296.646 8.06403V55.424H285.702V8.06403H296.646Z" fill="url(#paint4_linear_447_517)" />
    <path
      d="M334.402 36.992C334.402 38.016 334.337 39.0827 334.21 40.192H309.441C309.612 42.4107 310.316 44.1174 311.553 45.312C312.833 46.464 314.391 47.04 316.226 47.04C318.956 47.04 320.855 45.888 321.922 43.584H333.57C332.972 45.9307 331.884 48.0427 330.306 49.92C328.77 51.7974 326.828 53.2694 324.482 54.336C322.135 55.4027 319.511 55.936 316.609 55.936C313.111 55.936 309.996 55.1894 307.266 53.696C304.535 52.2027 302.402 50.0694 300.866 47.296C299.33 44.5227 298.562 41.28 298.562 37.568C298.562 33.856 299.308 30.6134 300.801 27.84C302.337 25.0667 304.471 22.9334 307.202 21.44C309.932 19.9467 313.068 19.2 316.609 19.2C320.065 19.2 323.137 19.9254 325.826 21.376C328.514 22.8267 330.604 24.896 332.098 27.584C333.633 30.272 334.402 33.408 334.402 36.992ZM323.202 34.112C323.202 32.2347 322.562 30.7414 321.282 29.632C320.002 28.5227 318.402 27.968 316.482 27.968C314.647 27.968 313.09 28.5014 311.81 29.568C310.572 30.6347 309.804 32.1494 309.506 34.112H323.202Z"
      fill="url(#paint5_linear_447_517)"
    />
    <defs>
      <linearGradient id="paint0_linear_447_517" x1="88" y1="32" x2="334.402" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EC4899" />
        <stop offset="1" stopColor="#7C3AED" />
      </linearGradient>
      <linearGradient id="paint1_linear_447_517" x1="88" y1="32" x2="334.402" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EC4899" />
        <stop offset="1" stopColor="#7C3AED" />
      </linearGradient>
      <linearGradient id="paint2_linear_447_517" x1="88" y1="32" x2="334.402" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EC4899" />
        <stop offset="1" stopColor="#7C3AED" />
      </linearGradient>
      <linearGradient id="paint3_linear_447_517" x1="88" y1="32" x2="334.402" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EC4899" />
        <stop offset="1" stopColor="#7C3AED" />
      </linearGradient>
      <linearGradient id="paint4_linear_447_517" x1="88" y1="32" x2="334.402" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EC4899" />
        <stop offset="1" stopColor="#7C3AED" />
      </linearGradient>
      <linearGradient id="paint5_linear_447_517" x1="88" y1="32" x2="334.402" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EC4899" />
        <stop offset="1" stopColor="#7C3AED" />
      </linearGradient>
      <clipPath id="clip0_447_517">
        <rect width="64" height="64" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
