import { type ReactNode, useState } from 'react';

import { Box, Modal as ModalMui } from '@mui/material';

import classes from './styles';

interface ModalProps {
  children: ReactNode;
  handleClose?: (value: boolean) => void;
}

const Modal = (props: ModalProps) => {
  const { children, handleClose } = props;

  const [isOpen, setIsOpen] = useState(true);

  const handleCloseModal = () => {
    setIsOpen(false);
    handleClose && handleClose(false);
  };

  return (
    <ModalMui open={isOpen} onClose={handleCloseModal}>
      <Box sx={classes.root}>{children}</Box>
    </ModalMui>
  );
};

export default Modal;
