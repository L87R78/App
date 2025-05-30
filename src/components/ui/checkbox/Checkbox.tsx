import { Checkbox as MuiCheckbox, type CheckboxProps } from '@mui/material';
import React from 'react';

type Props = {
  label?: string;
  className?: string;
  labelClassName?: string;
} & CheckboxProps;

const Checkbox: React.FC<Props> = ({ label, className = '', labelClassName = '', ...props }) => {
  return (
    <label className={`flex items-center gap-1 cursor-pointer ${className}`}>
      <MuiCheckbox
        disableRipple
        {...props}
        style={{ width: '16px', height: '16px', marginRight: '6px' }}
      />
      {label && <span className={labelClassName}>{label}</span>}
    </label>
  );
};

export default Checkbox;
