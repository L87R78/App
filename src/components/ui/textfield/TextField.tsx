import { TextField as MuiTextField, type TextFieldProps } from '@mui/material';
import React, { type ReactNode } from 'react';
import Typography from '../typography/Typography';

type Props = {
  label?: string;
  className?: string;
  labelClassName?: string;
} & TextFieldProps;

const TextField: React.FC<Props> = ({
  label,
  className = '',
  labelClassName = '',
  ...props
}): ReactNode => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <Typography variant="body2" fontWeight={300} className={labelClassName}>
          {label}
        </Typography>
      )}
      <MuiTextField
        fullWidth
        variant={props.variant || 'outlined'}
        size={props.size || 'small'}
        {...props}
      />
    </div>
  );
};

export default TextField;
