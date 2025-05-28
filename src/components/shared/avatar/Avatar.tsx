import { Avatar as MuiAvatar, type AvatarProps } from '@mui/material';
import React, { type ReactNode } from 'react';

type Props = {
  className?: string;
  src?: string;
  alt?: string;
  children?: React.ReactNode;
} & AvatarProps;

const Avatar: React.FC<Props> = ({
  className = '',
  src,
  alt = '',
  children,
  ...props
}): ReactNode => {
  return (
    <MuiAvatar src={src} alt={alt} className={className} {...props}>
      {children}
    </MuiAvatar>
  );
};

export default Avatar;
