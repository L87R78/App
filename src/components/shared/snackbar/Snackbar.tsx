import { Snackbar as MuiSnackbar, type SnackbarProps } from '@mui/material';
import React, { type ReactNode } from 'react';
import Alert from '../alert/Alert';

type Props = {
  message: string;
  open: boolean;
  onClose: () => void;
  severity?: 'success' | 'error' | 'info' | 'warning';
  autoHideDuration?: number;
} & Omit<SnackbarProps, 'open' | 'onClose' | 'message'>;

const Snackbar: React.FC<Props> = ({
  message,
  open,
  onClose,
  severity = 'info',
  autoHideDuration = 4000,
  ...props
}): ReactNode => {
  return (
    <MuiSnackbar
      open={open}
      onClose={onClose}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      {...props}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="standard"
        sx={{ width: '100%' }}
        className="snackbar-alert"
      >
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
