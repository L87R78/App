import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { setHasClientAccountsData } from '@/store/clientAccounts/clientAccountsSlice';
import { Alert, Box, Button } from '@/components/ui';

import classes from './styles';

const NoAccounts = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleStartService = () => {
    dispatch(setHasClientAccountsData(true));
  };

  return (
    <Box sx={classes.layout}>
      <Box sx={classes.wrapperNoAccounts}>
        <Alert severity="error">No accounts fould</Alert>
        <Typography sx={classes.descriptionNoAccounts} variant="h3">
          Proceed to open an account
        </Typography>
        <Box sx={classes.wrapperActionsNoAccounts}>
          <Button variant="contained">No</Button>
          <Button variant="outlined" onClick={handleStartService}>
            Yes
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NoAccounts;
