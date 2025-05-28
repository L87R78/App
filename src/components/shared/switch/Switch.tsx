import { Switch as MuiSwitch, type SwitchProps } from '@mui/material';
import React, { type ReactNode } from 'react';

type Props = {
  className?: string;
} & SwitchProps;

const Switch: React.FC<Props> = ({ className = '', ...props }): ReactNode => {
  return <MuiSwitch disableRipple className={className} {...props} />;
};

export default Switch;
