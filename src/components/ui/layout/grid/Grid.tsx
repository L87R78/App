import type { GridProps } from '@mui/material';
import { Grid as MuiGrid } from '@mui/material';
import React from 'react';

type CustomGridProps<T extends React.ElementType = 'div'> = {
  component?: T;
  className?: string;
  children?: React.ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  item?: boolean;
} & GridProps<T>;

const Grid = <T extends React.ElementType = 'div'>({
  className = '',
  children,
  item,
  xs,
  sm,
  md,
  ...props
}: CustomGridProps<T>) => {
  return (
    <MuiGrid className={className} xs={xs} sm={sm} md={md} item={item} {...props}>
      {children}
    </MuiGrid>
  );
};

export default Grid;
