import { useState } from 'react';

import { Typography } from '@mui/material';

import { Box, Button, Checkbox, Divider, Select } from '@/components/ui';
import { setClientAccountsData } from '@/store/clientAccounts/clientAccountsSlice';
import type { RootState } from '@/store/index';
import { useDispatch, useSelector } from 'react-redux';
import NoAccounts from './NoAccounts';
import { currency, plans, productGroups, products } from './constants';
import classes from './styles';

const Accounts = () => {
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
            label="Select Product Group"
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
            label="Select Currency"
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
            label="Product"
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
            label="Select Plan"
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
          <Button variant="outlined">Cancel</Button>
          <Button
            variant="contained"
            onClick={() => {
              setAccounts(prev => ({
                ...prev,
                isConfirm: true,
              }));
            }}
          >
            confirm
          </Button>
        </Box>
      )}

      {accounts.isConfirm && (
        <>
          <Box sx={classes.wrapperReletedDocuments}>
            <Divider />
            <Typography sx={classes.titleRelatedDocuments} variant="h3">
              Related documents - signature and print
            </Typography>
            <Box sx={classes.wrapperClientAccountCheckboxes}>
              <Box sx={classes.wrapperCheckboxes}>
                <Checkbox
                  checked
                  disabled
                  label="I confirm that I have read and understand the terms and conditions"
                />
                <Checkbox
                  checked
                  disabled
                  label="I confirm that I have read and understand the terms and conditions"
                />
              </Box>
              <Box sx={classes.wrapperCheckboxes}>
                <Checkbox
                  checked
                  disabled
                  label="I confirm that I have read and understand the terms and conditions"
                />
                <Checkbox
                  checked
                  disabled
                  label="I confirm that I have read and understand the terms and conditions"
                />
              </Box>
            </Box>
          </Box>
          <Box sx={classes.wrapperActions}>
            <Button variant="outlined">Cancel</Button>
            <Box sx={{ display: 'flex', gap: '24px' }}>
              <Button variant="outlined" onClick={() => {}}>
                Print
              </Button>
              <Button variant="contained" onClick={handleSignature}>
                E-signature
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Accounts;
