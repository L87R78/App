import { Box, TextField, Typography } from '@mui/material';

import IconArrowLeft from '@/assets/icons/iconArrowLeft.svg';
import FlagBulgaria from '@/assets/icons/iconFlagBG.svg';

import classes from './styles';

interface InputPhoneProps {
  handleOnChange: (value: string) => void; // callback when filled
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
  const { handleOnChange } = props;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatedValue = formatInput(e.target.value);

    e.target.value = formatedValue;

    return handleOnChange(e.target.value);
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatedValue = formatInput(e.target.value);

    e.target.value = formatedValue; // TODO: Send value to parent
    isFocused = false;
  };
  return (
    <TextField
      name={''}
      slotProps={{
        input: {
          component: () => {
            return (
              <Box sx={classes.container(isFocused)}>
                <Box sx={classes.wrapperSelect}>
                  <Box component="img" src={FlagBulgaria} onClick={() => {}} />
                  <Typography sx={classes.phonePrefix} variant="h4" fontSize={'16px'}>
                    {'+359'}
                  </Typography>
                  <Box component="img" sx={classes.iconArrow} src={IconArrowLeft} />
                </Box>
                <Box sx={classes.wrapperInput}>
                  <input
                    list="autocompleteOff"
                    aria-autocomplete="none"
                    onChange={onChange}
                    onBlur={onBlur}
                    style={{
                      outline: 'none',
                      boxShadow: 'none',
                      border: 'none',
                      marginLeft: '16px',
                      height: '34px',
                      fontSize: '16px',
                    }}
                  />
                </Box>
              </Box>
            );
          },
          style: { paddingLeft: '16px' },
        },
      }}
    />
  );
};

export default InputPhone;
