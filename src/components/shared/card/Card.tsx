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
  title?: string | ReactNode;
  cardContent?: ReactNode;
  actions?: ReactNode;
  className?: string;
  contentClassName?: string;
} & CardProps;

const Card: React.FC<Props> = ({
  title,
  cardContent,
  actions,
  className = '',
  contentClassName = '',
  ...props
}) => {
  return (
    <MuiCard className={className} {...props}>
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
      {cardContent && <CardContent className={contentClassName}>{cardContent}</CardContent>}
      {actions && <CardActions>{actions}</CardActions>}
    </MuiCard>
  );
};

export default Card;
