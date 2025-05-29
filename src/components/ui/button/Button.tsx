import { Button as MuiButton, type ButtonProps } from '@mui/material';
import React, { type ReactNode } from 'react';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'contained',
  ...props
}): ReactNode => {
  return (
    <MuiButton variant={variant} {...props} size={props.size || 'large'}>
      {children}
    </MuiButton>
  );
};

export default Button;
