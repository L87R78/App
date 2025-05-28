import { Badge as MuiBadge, type BadgeProps } from '@mui/material';
import React from 'react';

type Props = {
  className?: string;
} & BadgeProps;

const Badge: React.FC<Props> = ({ className = '', ...props }) => {
  return <MuiBadge className={className} {...props} />;
};

export default Badge;
