import type { BoxProps } from '@mui/material';
import { Box as MuiBox } from '@mui/material';
import React from 'react';

type CustomBoxProps<T extends React.ElementType> = {
  component?: T;
} & BoxProps<T>;

const Box = <T extends React.ElementType = 'div'>(props: CustomBoxProps<T>) => {
  return <MuiBox {...props} />;
};

export default Box;
