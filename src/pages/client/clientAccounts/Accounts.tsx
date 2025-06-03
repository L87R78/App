import { useState } from 'react';

import { Typography } from '@mui/material';

import { LoadingModal, SuccessModal } from '@/components/shared';
import { Box, Button, Checkbox, Divider, Select } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { route } from '@/router';
import { createClientAccount } from '@/store/clientAccounts/clientAccountsApi';
import { setClientAccountsData } from '@/store/clientAccounts/clientAccountsSlice';
import { useAppDispatch } from '@/store/hooks';
import type { RootState } from '@/store/index';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NoAccounts from './NoAccounts';
import { currency, plans, productGroups, products } from './constants';
import classes from './styles';

const Accounts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dispatchRequest = useAppDispatch();

  const { t } = useI18nNamespaces([
    'pages/client/client_data/client_accounts',
    'shared/button',
    'shared/label',
  ]);

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
    dispatchRequest(createClientAccount(accounts));
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
            label={t('pages/client/client_data/client_accounts:products.chooseProduct')}
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
            label={t('pages/client/client_data/client_accounts:openingTypes.choosePlan')}
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
          <Button variant="outlined">{t('shared/buttons:cancel')}</Button>
          <Button
            variant="contained"
            onClick={() => {
              setAccounts(prev => ({
                ...prev,
                isConfirm: true,
              }));
            }}
          >
            {t('shared/buttons:confirm')}
          </Button>
        </Box>
      )}

      {accounts.isConfirm && (
        <>
          <Box sx={classes.wrapperReletedDocuments}>
            <Divider />
            <Typography sx={classes.titleRelatedDocuments} variant="h3">
              {t('pages/client/client_data/client_accounts:documents.title')}
            </Typography>
            <Box sx={classes.wrapperClientAccountCheckboxes}>
              <Box sx={classes.wrapperCheckboxes}>
                <Checkbox
                  checked
                  disabled
                  label={t('pages/client/client_data/client_accounts:documents.contract')}
                />
                <Checkbox
                  checked
                  disabled
                  label={t(
                    'pages/client/client_data/client_accounts:documents.additionalAgreement'
                  )}
                />
              </Box>
              <Box sx={classes.wrapperCheckboxes}>
                <Checkbox
                  checked
                  disabled
                  label={t('pages/client/client_data/client_accounts:documents.declaration')}
                />
                <Checkbox
                  checked
                  disabled
                  label={t('pages/client/client_data/client_accounts:documents.investorNewsletter')}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={classes.wrapperActions}>
            <Button variant="outlined">Cancel</Button>
            <Box sx={{ display: 'flex', gap: '24px' }}>
              <Button variant="outlined" onClick={() => {}}>
                {t('shared/buttons:print')}
              </Button>
              <Button variant="contained" onClick={handleSignature}>
                {t('shared/buttons:E-signature')}
              </Button>
            </Box>
          </Box>
        </>
      )}
      <LoadingModal text={t('pages/client/client_data/gdpr:docsAreBeingSigned')} />

      <SuccessModal
        onContinue={() => {
          navigate(route.paymentOperationsTranfers);
        }}
        message={t('pages/client/client_data/gdpr:docsSignedSuccessfuly')}
        buttonMessage="OK"
      />
    </Box>
  );
};

export default Accounts;
