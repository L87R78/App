import { Chip as MuiChip, type ChipProps } from '@mui/material';
import React, { type ReactNode } from 'react';

type Props = {
  className?: string;
} & ChipProps;

const Chip: React.FC<Props> = ({ className = '', ...props }): ReactNode => {
  return <MuiChip className={className} {...props} />;
};

export default Chip;
