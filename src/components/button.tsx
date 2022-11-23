import React, { FC, ReactNode } from 'react';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
}

export type ButtonProps = {
  type: ButtonType;
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ type, children }) => (
  <button className={type === ButtonType.primary ? 'bg-green-500 text-white' : 'bg-blue-200 text-black'}>{children}</button>
);
