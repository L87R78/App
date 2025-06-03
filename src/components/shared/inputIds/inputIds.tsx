import { InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';

import classes from './styles';

interface InputPhoneProps {
  options: { label: string; value: string }[];
  placeholder?: string;
  label?: string;
  handleOnBlur: (value: { prefix: string; value: string }) => void;
}
const InputIds = (props: InputPhoneProps) => {
  const { options, handleOnBlur } = props;

  const [value, setValue] = useState('');
  const [prefix, setPrefix] = useState(options[0].value);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setValue(e.target.value);
  };

  const onBlur = (e: { target: { value: string } }) => {
    return handleOnBlur({ prefix, value: e.target.value });
  };

  return (
    <TextField
      fullWidth
      autoComplete="off"
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Select
                value={prefix}
                variant="standard"
                onChange={e => setPrefix(e.target.value)}
                disableUnderline
                sx={classes.select}
              >
                {options.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default InputIds;
