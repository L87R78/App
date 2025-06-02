import { IconButton as MuiIconButton, type ButtonProps } from '@mui/material';
import React, { type ReactNode } from 'react';

const Button: React.FC<ButtonProps> = ({ children, ...props }): ReactNode => {
  return (
    <MuiIconButton {...props} size={props.size || 'small'}>
      {children}
    </MuiIconButton>
  );
};

export default Button;
