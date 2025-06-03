import { useState } from 'react';

import { Typography } from '@mui/material';

import { useI18nNamespaces } from '@/hooks';

import { Box, Button, Checkbox, Divider, Select } from '@/components/ui';
import { setClientAccountsData } from '@/store/clientAccounts/clientAccountsSlice';
import type { RootState } from '@/store/index';
import { useDispatch, useSelector } from 'react-redux';
import NoAccounts from './NoAccounts';
import { currency, plans, productGroups, products } from './constants';
import classes from './styles';

const Accounts = () => {
  const { t } = useI18nNamespaces(['shared/label']);

  const dispatch = useDispatch();
  const clientAccounts = useSelector((state: RootState) => state.clientAccounts);

  const [accounts, setAccounts] = useState({
    productGroups: productGroups[0].value,
    product: products[0].value,
    currency: currency[0].value,
    selectPlan: plans[0].value,
    isConfirm: false,
  });

  const handleSignature = () => {
    dispatch(setClientAccountsData(accounts));
  };

  if (!clientAccounts.hasClientAccountsData) {
    return <NoAccounts />; // TODO: Update with redux state
  }

  return (
    <Box sx={classes.layout}>
      <Box sx={classes.wrapperClientAccountSelects}>
        <Box sx={classes.wrapperSelects}>
          <Select
            value={accounts.productGroups}
            options={productGroups}
            label={t('shared/label:selectProductGroup')}
            onChange={e => {
              setAccounts(prev => ({
                ...prev,
                productGroups: e.target.value,
              }));
            }}
          />
          <Select
            value={accounts.currency}
            options={currency}
            label={t('shared/label:selectCurrency')}
            onChange={e => {
              setAccounts(prev => ({
                ...prev,
                currency: e.target.value,
              }));
            }}
          />
        </Box>
        <Box sx={classes.wrapperSelects}>
          <Select
            disabled={accounts.productGroups === productGroups[0].value}
            value={accounts.product}
            options={products}
            label={t('shared/label:product')}
            onChange={e => {
              setAccounts(prev => ({
                ...prev,
                product: e.target.value,
              }));
            }}
          />
          <Select
            disabled={accounts.productGroups !== productGroups[0].value}
            value={accounts.selectPlan}
            options={plans}
            label={t('shared/label:selectPlan')}
            onChange={e => {
              setAccounts(prev => ({
                ...prev,
                selectPlan: e.target.value,
              }));
            }}
          />
        </Box>
      </Box>
      {!accounts.isConfirm && (
        <Box sx={classes.wrapperActions}>
          <Button variant="outlined">{t('shared/button:cancel')}</Button>
          <Button
            variant="contained"
            onClick={() => {
              setAccounts(prev => ({
                ...prev,
                isConfirm: true,
              }));
            }}
          >
            {t('shared/button:confirm')}
          </Button>
        </Box>
      )}

      {accounts.isConfirm && (
        <>
          <Box sx={classes.wrapperReletedDocuments}>
            <Divider />
            <Typography sx={classes.titleRelatedDocuments} variant="h3">
              {t('pages/client/client_data/client_accounts:documents:title')}
            </Typography>
            <Box sx={classes.wrapperClientAccountCheckboxes}>
              <Box sx={classes.wrapperCheckboxes}>
                <Checkbox
                  checked
                  disabled
                  label={t('pages/client/client_data/client_accounts:documents:contract')}
                />
                <Checkbox
                  checked
                  disabled
                  label={t(
                    'pages/client/client_data/client_accounts:documents:additionalAgreement'
                  )}
                />
              </Box>
              <Box sx={classes.wrapperCheckboxes}>
                <Checkbox
                  checked
                  disabled
                  label={t('pages/client/client_data/client_accounts:documents:declaration')}
                />
                <Checkbox
                  checked
                  disabled
                  label={t('pages/client/client_data/client_accounts:documents:investorNewsletter')}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={classes.wrapperActions}>
            <Button variant="outlined">{t('shared/button:cancel')}</Button>
            <Box sx={{ display: 'flex', gap: '24px' }}>
              <Button variant="outlined" onClick={() => {}}>
                {t('pages/client/client_data/gdpr:print')}
              </Button>
              <Button variant="contained" onClick={handleSignature}>
                {t('shared/button:E-signature')}
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Accounts;
