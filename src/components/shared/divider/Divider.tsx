import { Divider as MuiDivider, type DividerProps } from '@mui/material';
import React, { type ReactNode } from 'react';

type Props = {
  className?: string;
} & DividerProps;

const Divider: React.FC<Props> = ({ className = '', ...props }): ReactNode => {
  return <MuiDivider className={className} {...props} />;
};

export default Divider;
