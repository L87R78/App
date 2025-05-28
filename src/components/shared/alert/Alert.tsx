import { Alert as MuiAlert, type AlertProps } from '@mui/material';
import React, { type ReactNode } from 'react';

type Props = {
  className?: string;
} & AlertProps;

const Alert: React.FC<Props> = ({ className = '', severity = 'info', ...props }): ReactNode => {
  return <MuiAlert className={className} severity={severity} {...props} />;
};

export default Alert;
