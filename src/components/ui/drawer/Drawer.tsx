import { Box, IconButton, Drawer as MuiDrawer, type DrawerProps } from '@mui/material';
import React, { type ReactNode } from 'react';
import Typography from '../typography/Typography';

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string | ReactNode;
  children?: ReactNode;
  anchor?: DrawerProps['anchor'];
  width?: string | number;
  className?: string;
  variant?: DrawerProps['variant'];
  ModalProps?: DrawerProps['ModalProps'];
  slotProps?: DrawerProps['slotProps'];
  isCloseAvailable?: boolean;
};

const Drawer: React.FC<Props> = ({
  open,
  onClose,
  title,
  children,
  anchor = 'right',
  width = 360,
  className = '',
  variant,
  isCloseAvailable = false,
  ...props
}) => {
  return (
    <MuiDrawer
      variant={variant}
      open={open}
      onClose={onClose}
      anchor={anchor}
      className={className}
      ModalProps={props.ModalProps}
      slotProps={props.slotProps}
      {...props}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        {title && (
          <Typography variant="h5" fontWeight={600}>
            {title}
          </Typography>
        )}
        {isCloseAvailable && <IconButton onClick={onClose}>{/* //TODO: add icon */}</IconButton>}
      </Box>
      <Box>{children}</Box>
    </MuiDrawer>
  );
};

export default Drawer;
