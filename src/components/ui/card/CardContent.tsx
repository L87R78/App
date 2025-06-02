import { CardContent as MuiCardContent, type CardContentProps } from '@mui/material';
import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
} & CardContentProps;

const CardContent: React.FC<Props> = ({ className = '', children, ...props }) => {
  return (
    <MuiCardContent className={className} {...props}>
      {children}
    </MuiCardContent>
  );
};

export default CardContent;
