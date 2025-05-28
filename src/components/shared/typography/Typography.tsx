import { Typography as MuiTypography, type TypographyProps } from '@mui/material';
import React, { type ReactNode } from 'react';

type Props = {
  className?: string;
} & TypographyProps;

const Typography: React.FC<Props> = ({
  className = '',
  variant = 'body1',
  ...props
}): ReactNode => {
  return <MuiTypography className={className} variant={variant} {...props} />;
};

export default Typography;
