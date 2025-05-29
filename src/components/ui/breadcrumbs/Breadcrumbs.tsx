import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import React, { type ReactNode } from 'react';
import Link from '../link/Link';
import Typography from '../typography/Typography';

type Crumb = {
  label: string | ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  isCurrent?: boolean;
};

type Props = {
  items: Crumb[];
  className?: string;
  separator?: ReactNode;
};

const Breadcrumbs: React.FC<Props> = ({ items, className = '', separator = '›' }): ReactNode => {
  return (
    <MuiBreadcrumbs separator={separator} className={className} aria-label="breadcrumb">
      {items.map(({ label, href, onClick, icon, isCurrent }, index) =>
        href || onClick ? (
          <Link
            key={index}
            color="inherit"
            href={href}
            onClick={onClick}
            underline="none"
            sx={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          >
            {icon}
            {label}
          </Link>
        ) : (
          <Typography
            key={index}
            color="text.primary"
            sx={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
            aria-current={isCurrent ? 'page' : undefined}
          >
            {icon}
            {label}
          </Typography>
        )
      )}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
