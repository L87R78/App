import type { ContainerProps } from '@mui/material';
import { Container as MuiContainer } from '@mui/material';
import React from 'react';

type CustomContainerProps<T extends React.ElementType> = {
  component?: T;
  className?: string;
  children?: React.ReactNode;
} & ContainerProps<T>;

const Container = <T extends React.ElementType = 'div'>({
  className = '',
  children,
  ...props
}: CustomContainerProps<T>) => {
  return (
    <MuiContainer className={className} disableGutters maxWidth="lg" {...props}>
      {children}
    </MuiContainer>
  );
};

export default Container;
