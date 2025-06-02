import { AccountSelect, LoadingModal, SuccessModal } from '@/components';
import { AccountOptionType } from '@/components/shared/accountSelect/AccountSelect';
import { Box, Button, DatePicker, Select, TextField, Typography } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { route } from '@/router';
import { useAppDispatch } from '@/store/hooks';
import { signAndTransfer } from '@/store/paymentOperations/transfersApi';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account_options, currency_options } from './constants';

const TransfersBetweenOwnAccounts = () => {
  const navigate = useNavigate();
  const dispatchRequest = useAppDispatch();
  const { t } = useI18nNamespaces([
    'pages/payment_operations/transfers',
    'shared/button',
    'shared/common',
  ]);

  const [accountValue, setAccountValue] = useState(account_options[0]);
  const [transferToAccountValue, setTransferToAccountValue] = useState<AccountOptionType | null>(
    null
  );
  const [defaultCurrency, setDefaultCurrency] = useState(account_options[0].accountCurrency);
  const [transferDate, setTransferDate] = useState<Dayjs | null>(dayjs());
  const [amount, setAmount] = useState<number>(0);

  const fee = amount ? '3.58' : '0.00';
  const isTransactionNotValid = amount === 0 || !transferToAccountValue;

  const handleSigning = () => {
    dispatchRequest(signAndTransfer(10));
  };

  const handleAccountChange = (selected: AccountOptionType | null) => {
    if (selected) {
      setAccountValue(selected);
      setDefaultCurrency(selected.accountCurrency);
    }
  };
  return (
    <Box className="flex h-full flex-col p-4">
      <Box className="space-y-6 overflow-y-auto pr-2">
        <AccountSelect
          label={t('pages/payment_operations/transfers:fromAccount')}
          options={account_options}
          value={accountValue}
          onChange={handleAccountChange}
        />

        <AccountSelect
          label={t('pages/payment_operations/transfers:toAccount')}
          options={account_options.filter(opt => opt.account !== accountValue.account)}
          value={transferToAccountValue}
          onChange={setTransferToAccountValue}
          placeholder={t('pages/payment_operations/transfers:selectAccount')}
        />

        <Typography variant="h6" fontWeight="bold" mt={2}>
          {t('pages/payment_operations/transfers:details')}
        </Typography>
        <Box className="flex flex-col gap-5">
          <Box display="flex" gap={2} width={400}>
            {/* TODO: find a better thing to use instead textfield for number https://v6.mui.com/material-ui/react-text-field/#type-quot-number-quot */}
            <TextField
              label={t('pages/payment_operations/transfers:amount')}
              type="number"
              value={amount}
              onChange={e => setAmount(parseFloat(e.target.value))}
              fullWidth
            />

            <Select
              label={t('pages/payment_operations/transfers:currency')}
              value={defaultCurrency}
              options={currency_options}
              onChange={e => setDefaultCurrency(e.target.value)}
              disabled={
                !transferToAccountValue ||
                transferToAccountValue.accountCurrency === accountValue.accountCurrency
              }
            ></Select>
          </Box>

          <Box display="flex" gap={2}>
            <TextField label={t('pages/payment_operations/transfers:reason')} fullWidth />

            <DatePicker
              label={t('pages/payment_operations/transfers:valueDate')}
              value={transferDate}
              onChange={newValue => setTransferDate(newValue)}
            />
          </Box>

          <Typography variant="body2" color="textSecondary">
            {t('pages/payment_operations/transfers:transferTax')}
            <strong>
              {' '}
              {fee} {defaultCurrency}
            </strong>
          </Typography>

          <AccountSelect
            label={t('pages/payment_operations/transfers:feeCollectionAccount')}
            options={account_options}
            value={accountValue}
            onChange={handleAccountChange}
          />
        </Box>
      </Box>

      <Box className="flex justify-between pt-5">
        <Button variant="outlined"> {t('shared/button:cancel')}</Button>

        <Box display="flex" gap={2}>
          <Button variant="outlined" disabled={isTransactionNotValid} onClick={() => {}}>
            {t('shared/button:print')}
          </Button>

          <Button variant="contained" disabled={isTransactionNotValid} onClick={handleSigning}>
            {t('shared/button:signAndContinue')}
          </Button>
        </Box>
      </Box>

      <LoadingModal text={t('shared/common:documentsAreBeingSigned')} />

      <SuccessModal
        onContinue={() => {
          navigate(route.clientAccounts);
        }}
        message={t('pages/client/client_data/gdpr:docsSignedSuccessfuly')}
        buttonMessage={t('shared/button:continue')}
      />
    </Box>
  );
};

export default TransfersBetweenOwnAccounts;
