import type { GridProps } from '@mui/material';
import { Grid as MuiGrid } from '@mui/material';
import React from 'react';

type CustomGridProps<T extends React.ElementType = 'div'> = {
  component?: T;
  className?: string;
  children?: React.ReactNode;
} & GridProps<T>;

const Grid = <T extends React.ElementType = 'div'>({
  className = '',
  children,
  ...props
}: CustomGridProps<T>) => {
  return (
    <MuiGrid className={className} {...props}>
      {children}
    </MuiGrid>
  );
};

export default Grid;
