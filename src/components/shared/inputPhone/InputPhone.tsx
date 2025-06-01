import { useState } from 'react';

import { Box, TextField, Typography } from '@mui/material';

import IconArrowLeft from '@/assets/icons/iconArrowLeft.svg';
import FlagBulgaria from '@/assets/icons/iconFlagBG.svg';
import classes from './styles';
import { phonePrefixes } from '@/common/constants';

interface InputPhoneProps {
  label?: string;
  handleOnBlur: (value: string) => void; // callback when filled
}

const formatInput = (value: string) => {
  let newValue = value.replace(/[^\d]/g, '').slice(0, 9);

  newValue = newValue.replace(/(\d{1,3})(\d{1,3})?(\d{1,3})?/, function (_, p1, p2, p3) {
    if (p3) {
      return `${p1} ${p2} ${p3}`;
    } else if (p2) {
      return `${p1} ${p2}`;
    }

    return p1;
  });

  return newValue;
};

let isFocused = false;

const InputPhone = (props: InputPhoneProps) => {
  const { label, handleOnBlur } = props;

  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatedValue = formatInput(e.target.value);

    e.target.value = formatedValue;
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatedValue = formatInput(e.target.value);

    e.target.value = formatedValue;
    isFocused = false;
    setValue(e.target.value);
    return handleOnBlur(`${phonePrefixes.BG} ${e.target.value}`);
  };

  return (
    <TextField
      name={'phoneNumber'}
      slotProps={{
        input: {
          component: () => {
            return (
              <>
                {label && (
                  <Typography variant="body2" fontWeight={300}>
                    {label}
                  </Typography>
                )}
                <Box sx={classes.container(isFocused)}>
                  <Box sx={classes.wrapperSelect}>
                    <Box component="img" src={FlagBulgaria} onClick={() => {}} />
                    <Typography sx={classes.phonePrefix} variant="h4" fontSize={'16px'}>
                      {phonePrefixes.BG}
                    </Typography>
                    <Box component="img" sx={classes.iconArrow} src={IconArrowLeft} />
                  </Box>
                  <Box sx={classes.wrapperInput}>
                    <input
                      list="autocompleteOff"
                      aria-autocomplete="none"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value.length > 0 ? value : undefined}
                      style={{
                        outline: 'none',
                        boxShadow: 'none',
                        border: 'none',
                        marginLeft: '12px',
                        height: '24px',
                        fontSize: '16px',
                      }}
                    />
                  </Box>
                </Box>
              </>
            );
          },
          style: { paddingLeft: '16px' },
        },
      }}
    />
  );
};

export default InputPhone;
