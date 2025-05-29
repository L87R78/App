import { MenuItem, Select as MuiSelect, type SelectProps } from '@mui/material';
import type { ReactNode } from 'react';
import Typography from '../typography/Typography';

type SelectValue = string | number | readonly string[] | undefined;

type Props<T extends SelectValue = string> = {
  label?: string;
  options: { label: string; value: T }[];
  className?: string;
} & SelectProps<T>;

const Select = <T extends SelectValue = string>({
  label,
  options,
  className = '',
  ...selectProps
}: Props<T>): ReactNode => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <Typography variant="body2" fontWeight={500}>
          {label}
        </Typography>
      )}
      <MuiSelect {...selectProps} size={selectProps.size || 'small'}>
        {options.map(option => (
          <MenuItem key={String(option.value)} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </div>
  );
};

export default Select;
