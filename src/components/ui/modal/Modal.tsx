import { type ReactNode } from 'react';

import { Box, Modal as ModalMui, type ModalOwnProps } from '@mui/material';
import classes from './styles';

type ModalProps = {
  open: boolean;
  children: ReactNode;
  handleClose?: (value: boolean) => void;
} & ModalOwnProps;

const Modal = ({ open, handleClose, children, ...props }: ModalProps) => {
  return (
    <ModalMui open={open} onClose={handleClose} {...props}>
      <Box sx={classes.root}>{children}</Box>
    </ModalMui>
  );
};

export default Modal;
