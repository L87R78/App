import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog as MuiDialog,
  type DialogProps as MuiDialogProps,
  Typography,
} from '@mui/material';
import React, { type ReactNode } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  dialogContent?: ReactNode;
  actions?: ReactNode;
  className?: string;
} & Omit<MuiDialogProps, 'open' | 'onClose'>;

const Dialog: React.FC<Props> = ({
  open,
  onClose,
  title,
  dialogContent,
  actions,
  className = '',
  ...props
}): ReactNode => {
  return (
    <MuiDialog open={open} onClose={onClose} className={className} {...props}>
      {title && (
        <DialogTitle>
          {typeof title === 'string' ? (
            <Typography variant="h5" fontWeight={600}>
              {title}
            </Typography>
          ) : (
            title
          )}
        </DialogTitle>
      )}
      {dialogContent && <DialogContent>{dialogContent}</DialogContent>}
      {actions && <DialogActions>{actions}</DialogActions>}
    </MuiDialog>
  );
};

export default Dialog;
