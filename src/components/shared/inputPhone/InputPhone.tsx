import { Box, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react';

import FlagBulgaria from '@/assets/icons/iconFlagBG.svg';
import { phonePrefixes } from '@/common/constants';

interface InputPhoneProps {
  placeholder?: string;
  label?: string;
  handleOnBlur: (value: string) => void;
}

const formatInput = (value: string) => {
  let newValue = value.replace(/[^\d]/g, '').slice(0, 9);
  newValue = newValue.replace(/(\d{1,3})(\d{1,3})?(\d{1,3})?/, function (_, p1, p2, p3) {
    if (p3) return `${p1} ${p2} ${p3}`;
    else if (p2) return `${p1} ${p2}`;
    return p1;
  });
  return newValue;
};

const InputPhone = ({ label, placeholder, handleOnBlur }: InputPhoneProps) => {
  const [value, setValue] = useState('');
  const [prefix, setPrefix] = useState(phonePrefixes.BG);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatInput(e.target.value);
    setValue(formatted);
  };

  const onBlur = () => {
    handleOnBlur(`${prefix} ${value}`);
  };

  return (
    <Box>
      {label && (
        <Typography variant="body2" fontWeight={300} mb={1}>
          {label}
        </Typography>
      )}

      <TextField
        fullWidth
        size="small"
        variant="outlined"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Select
                  value={prefix}
                  onChange={e => setPrefix(e.target.value)}
                  variant="standard"
                  disableUnderline
                  sx={{ pr: 3 }}
                >
                  <MenuItem value={phonePrefixes.BG}>
                    <Box display="flex" alignItems="center" gap={1} className="pr-1">
                      <img src={FlagBulgaria} alt="BG" height={16} />
                      {phonePrefixes.BG}
                    </Box>
                  </MenuItem>
                </Select>
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
};

export default InputPhone;
