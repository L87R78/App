import { Alert as MuiAlert, type AlertProps } from '@mui/material';

type PropsAlert = {
  className?: string;
  severity?: 'error' | 'warning' | 'info' | 'success';
} & AlertProps;

const Alert = (props: PropsAlert) => {
  const { className = '', severity = 'info', icon } = props;

  return <MuiAlert icon={icon} className={className} severity={severity} {...props} />;
};

export default Alert;
