import { Stack as MuiStack, type StackProps } from '@mui/material';
import React from 'react';

type Props<T extends React.ElementType = 'div'> = {
  component?: T;
  className?: string;
  children?: React.ReactNode;
} & StackProps<T>;

const Stack = <T extends React.ElementType = 'div'>({
  className = '',
  children,
  ...props
}: Props<T>) => {
  return (
    <MuiStack className={className} {...props}>
      {children}
    </MuiStack>
  );
};

export default Stack;
