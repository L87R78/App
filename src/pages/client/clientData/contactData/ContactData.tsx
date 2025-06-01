import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { useI18nNamespaces } from '@/hooks';
import { setContactData } from '@/store/onbording/onbordingSlice';
import { Card, TextField, Button, Modal } from '@/components/ui';
import { InputPhone, SmsCode } from '@/components';

import classes from './styles';
import { RootState } from '@/store';

const ContactData = () => {
  const { t } = useI18nNamespaces([
    'pages/client/client_data/id_document',
    'shared/common',
    'shared/label',
    'shared/button',
  ]);

  const clientData = useSelector((state: RootState) => state.onboarding.clientData);
  const dispatch = useDispatch();

  const [contactDataState, setContactDataState] = useState({
    phoneNumber: '',
    email: '',
    isOpenSMSCodeModal: false,
    isSMSCode: false,
  });

  const handleValidate = () => {
    dispatch(setContactData(contactDataState));
    setContactDataState(prev => ({
      ...prev,
      isOpenSMSCodeModal: true,
    }));
  };

  const handleRenderModal = () => {
    return (
      <Box sx={classes.wrapperModal}>
        <Typography sx={classes.titleModal} variant="h2">
          Enter SMS code
        </Typography>
        <Typography sx={classes.description} variant="h4">
          {`The confirmation code has been sent to: ${clientData.phoneNumber}`}
        </Typography>
        <SmsCode
          onComplete={e => {
            setContactDataState(prev => ({
              ...prev,
              isSMSCode: true,
            }));
          }}
        />
        <Box sx={classes.wrapperActions}>
          <Button
            onClick={() => {
              setContactDataState(prev => ({
                ...prev,
                isOpenSMSCodeModal: false,
              }));
            }}
            variant="outlined"
          >
            {t('shared/button:back')}
          </Button>
          <Button
            disabled={!contactDataState.isSMSCode}
            onClick={() => {
              setContactDataState(prev => ({
                ...prev,
                isSMSCode: true,
                isOpenSMSCodeModal: false,
              }));
            }}
            variant="contained"
          >
            {t('shared/button:complete')}
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={classes.wrapperContactData}>
      <Card>
        <Box sx={classes.wrapperFields}>
          <InputPhone
            label="Phone number"
            handleOnBlur={e => {
              setContactDataState(prev => ({
                ...prev,
                phoneNumber: e,
              }));
            }}
          />
          <TextField
            label="Email"
            value={contactDataState.email}
            onChange={e =>
              setContactDataState(prev => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
        </Box>
      </Card>
      <Box sx={classes.wrapperActions}>
        {!contactDataState.isSMSCode ? (
          <>
            <Button
              disabled={!Boolean(contactDataState.phoneNumber)}
              onClick={handleValidate}
              variant="contained"
            >
              {t('shared/button:validate')}
            </Button>
            <Button variant="outlined">{t('shared/button:continueTo', { text: 'DGPR' })}</Button>
          </>
        ) : (
          <Button onClick={() => alert('Go to GDPR In progress..')} variant="contained">
            {t('shared/button:continueTo', { text: 'KYC & DGPR' })}
          </Button>
        )}
      </Box>

      <Modal open={contactDataState.isOpenSMSCodeModal} children={handleRenderModal()} />
    </Box>
  );
};

export default ContactData;
