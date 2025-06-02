import {
  CardActions,
  CardContent,
  CardHeader,
  Card as MuiCard,
  Typography,
  type CardProps,
} from '@mui/material';
import React, { type ReactNode } from 'react';

type Props = {
  noShadow?: boolean;
  title?: string | ReactNode;
  cardContent?: ReactNode;
  actions?: ReactNode;
  className?: string;
  contentClassName?: string;
  children?: ReactNode;
} & CardProps;

const Card: React.FC<Props> = ({
  noShadow = false,
  title,
  cardContent,
  actions,
  className = '',
  contentClassName = '',
  children,
  ...props
}) => {
  return (
    <MuiCard className={`${className} p-3 m-2 ${noShadow ? 'no-shadow' : ''}`} {...props}>
      {title && (
        <CardHeader
          title={
            typeof title === 'string' ? (
              <Typography variant="h6" fontWeight={600}>
                {title}
              </Typography>
            ) : (
              title
            )
          }
        />
      )}
      {children}
      {cardContent && <CardContent className={contentClassName}>{cardContent}</CardContent>}
      {actions && <CardActions>{actions}</CardActions>}
    </MuiCard>
  );
};

export default Card;
