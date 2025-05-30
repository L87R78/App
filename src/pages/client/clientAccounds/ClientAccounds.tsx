import { useState } from 'react';

import { Typography } from '@mui/material';

import { Box, Button, Checkbox, Divider, Select } from '@/components/ui';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/index';
import NoAccounts from './NoAccounts';
import { productGroups, products, currency, plans } from './constants';
import classes from './styles';

const ClientAccounts = () => {
  const [isConfirm, setIsConfirm] = useState(false);

  const clientAccounts = useSelector((state: RootState) => state.clientAccounts);

  if (!clientAccounts.hasClientAccountsData) {
    return <NoAccounts />; // TODO: Update with redux state
  }

  return (
    <Box sx={classes.layout}>
      <Box sx={classes.wrapperClientAccountSelects}>
        <Box sx={classes.wrapperSelects}>
          <Select
            value={clientAccounts.productGroups}
            options={productGroups}
            label="Select Product Group"
          />
          <Select value={clientAccounts.currency} options={currency} label="Select Currency" />
        </Box>
        <Box sx={classes.wrapperSelects}>
          <Select value={clientAccounts.products} options={products} label="Product" />
          <Select value={clientAccounts.plans} options={plans} label="Select Plan" />
        </Box>
      </Box>
      {!isConfirm && (
        <Box sx={classes.wrapperActions}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained" onClick={() => setIsConfirm(!isConfirm)}>
            confirm
          </Button>
        </Box>
      )}

      {isConfirm && (
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
              <Button variant="contained" onClick={() => {}}>
                E-signature
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ClientAccounts;
