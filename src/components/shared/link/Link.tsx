import { Link as MuiLink, type LinkProps } from '@mui/material';
import React from 'react';

type Props = {
  className?: string;
} & LinkProps;

const Link: React.FC<Props> = ({ className = '', children, ...props }) => {
  return (
    <MuiLink className={className} {...props}>
      {children}
    </MuiLink>
  );
};

export default Link;
