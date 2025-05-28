import { Skeleton as MuiSkeleton, type SkeletonProps } from '@mui/material';
import React, { type ReactNode } from 'react';

type Props = {
  className?: string;
} & SkeletonProps;

const Skeleton: React.FC<Props> = ({ className = '', ...props }): ReactNode => {
  return <MuiSkeleton className={className} {...props} />;
};

export default Skeleton;
