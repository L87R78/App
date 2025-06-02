import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export type AccountOptionType = {
  account: string;
  accountType: string;
  accountBalance: number;
  accountCurrency: string;
};

interface AccountSelectProps {
  options: AccountOptionType[];
  value?: AccountOptionType | null;
  onChange?: (value: AccountOptionType | null) => void;
  id?: string;
  name?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  errorLabel?: string;
  placeholder?: string;
  fullWidth?: boolean;
}

const AccountSelect: React.FC<AccountSelectProps> = ({
  options,
  value = null,
  onChange,
  id,
  name,
  label = '',
  disabled = false,
  required = false,
  error = false,
  errorLabel = '',
  placeholder = 'Select account',
  fullWidth = true,
}) => {
  const [selected, setSelected] = useState<AccountOptionType | null>(value);

  const handleChange = (e: SelectChangeEvent<string>) => {
    const selectedValue = options.find(opt => opt.account === e.target.value) || null;
    setSelected(selectedValue);
    onChange?.(selectedValue);
  };

  return (
    <FormControl
      fullWidth={fullWidth}
      required={required}
      disabled={disabled}
      error={error}
      variant="outlined"
    >
      {label && (
        <Typography variant="body2" fontWeight={300} mb={1}>
          {label}
        </Typography>
      )}
      <Select
        labelId={`${id}-label`}
        id={id}
        name={name}
        value={selected?.account || ''}
        onChange={handleChange}
        displayEmpty
        renderValue={selectedValue => {
          const selectedOption = options.find(opt => opt.account === selectedValue);
          return selectedOption ? (
            <AccountDisplay option={selectedOption} />
          ) : (
            <Typography color="text.secondary">{placeholder}</Typography>
          );
        }}
      >
        {options.map(option => (
          <MenuItem key={option.account} value={option.account}>
            <AccountDisplay option={option} />
          </MenuItem>
        ))}
      </Select>

      {error && errorLabel && <FormHelperText>{errorLabel}</FormHelperText>}
    </FormControl>
  );
};

export default AccountSelect;

const AccountDisplay: React.FC<{ option: AccountOptionType }> = ({ option }) => (
  <Box display="flex" width="100%" alignItems="center" justifyContent="space-between">
    <Box>
      <Typography fontWeight="bold">{option.accountType}</Typography>
      <Typography variant="body2" color="text.secondary">
        {option.account}
      </Typography>
    </Box>
    <Box display="flex" gap={0.5} alignItems="center">
      <Typography variant="body2" color="text.secondary">
        Balance:
      </Typography>
      <Typography fontWeight="bold">
        {option.accountBalance} {option.accountCurrency}
      </Typography>
    </Box>
  </Box>
);
