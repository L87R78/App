import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { InputPhone, SmsCode } from '@/components';
import { Button, Card, Modal, TextField } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';

import { RootState } from '@/store';
import { setContactData } from '@/store/onboarding/onboardingSlice';
import classes from './styles';

const ContactData: React.FC<{ handleChangeTab: (index: number) => void }> = ({
  handleChangeTab,
}) => {
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
          onComplete={() => {
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
            <Button variant="outlined" onClick={() => handleChangeTab(2)}>
              {t('shared/button:continueTo', { text: 'GDPR' })}
            </Button>
          </>
        ) : (
          <Button onClick={() => handleChangeTab(2)} variant="contained">
            {t('shared/button:continueTo', { text: 'KYC & GDPR' })}
          </Button>
        )}
      </Box>

      <Modal open={contactDataState.isOpenSMSCodeModal} children={handleRenderModal()} />
    </Box>
  );
};

export default ContactData;
