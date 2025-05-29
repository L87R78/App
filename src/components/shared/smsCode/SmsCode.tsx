import React, { useRef, useState } from 'react';

import { Box } from '@mui/material';

import classes from './styles';

interface SmsCodeInputProps {
  length?: number; // number of digits
  onComplete?: (code: string) => void; // callback when filled
}

const SmsCodeInput = (props: SmsCodeInputProps) => {
  const { length = 6, onComplete } = props;

  const [values, setValues] = useState<string[]>(Array(length).fill(''));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const focusInput = (index: number) => {
    if (inputsRef.current[index]) {
      inputsRef.current[index]?.focus();
    }
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 1);
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    if (value && index < length - 1) {
      focusInput(index + 1);
    }

    if (newValues.every(val => val.length === 1)) {
      onComplete?.(newValues.join(''));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      if (values[index]) {
        const newValues = [...values];
        newValues[index] = '';
        setValues(newValues);
      } else if (index > 0) {
        focusInput(index - 1);
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('Text').replace(/\D/g, '').slice(0, length);
    if (!pasted) return;

    const newValues = [...values];
    for (let i = 0; i < pasted.length; i++) {
      newValues[i] = pasted[i];
    }
    setValues(newValues);

    const lastIndex = Math.min(pasted.length, length) - 1;
    focusInput(lastIndex);

    if (pasted.length === length) {
      onComplete?.(pasted);
    }
  };

  return (
    <Box sx={classes.wrapperInputs}>
      {values.map((val, idx) => (
        <Box
          key={idx}
          component="input"
          sx={classes.input}
          ref={(el: HTMLInputElement | null) => {
            inputsRef.current[idx] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={val}
          onChange={e => handleChangeValue(e, idx)}
          onKeyDown={e => handleKeyDown(e, idx)}
          onPaste={handlePaste}
        />
      ))}
    </Box>
  );
};

export default SmsCodeInput;
