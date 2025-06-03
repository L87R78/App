import { Alert, Box, Button } from '@/components/ui';
import { AppDispatch } from '@/store';
import { setHasClientAccountsData } from '@/store/clientAccounts/clientAccountsSlice';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { useI18nNamespaces } from '@/hooks';

import classes from './styles';

const NoAccounts = () => {
  const { t } = useI18nNamespaces([]);

  const dispatch = useDispatch<AppDispatch>();

  const handleStartService = () => {
    dispatch(setHasClientAccountsData(true));
  };

  return (
    <Box sx={classes.layout}>
      <Box sx={classes.wrapperNoAccounts}>
        <Alert severity="warning">
          {t('pages/client/client_data/client_accounts:missingAccoungData:errorText')}
        </Alert>
        <Typography sx={classes.descriptionNoAccounts} variant="h3">
          {t('pages/client/client_data/client_accounts:missingAccoungData:description')}
        </Typography>
        <Box sx={classes.wrapperActionsNoAccounts}>
          <Button variant="contained">{t('shared/button:no')}</Button>
          <Button variant="outlined" onClick={handleStartService}>
            {t('shared/button:yes')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NoAccounts;
