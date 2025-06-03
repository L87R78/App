import { useI18nNamespaces } from '@/hooks';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { route } from '@/router';

import iconScan from '@/assets/icons/iconScan.svg';
import { Checkbox, LoadingModal, Modal } from '@/components';
import InputIds from '@/components/shared/inputIds/inputIds';
import { setLoadingModalVisibility } from '@/store/common/commonSlice';

import { clientIdentification } from '@/common/constants';

import classes from './styles';

const ClientIdentification = () => {
  const { t } = useI18nNamespaces([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isClientIdentification, setIsClientIdentification] = useState(true);
  const [isOpenModalScanDocument, setIsOpenModalScanDocument] = useState(false);

  const handleGoToIDdocument = () => {
    setIsClientIdentification(false);
    setIsOpenModalScanDocument(false);
    dispatch(setLoadingModalVisibility(true));

    setTimeout(() => {
      dispatch(setLoadingModalVisibility(false));
      navigate(route.clientData);
    }, 1000);
  };

  const handleModalClientIdentificationContent = () => {
    return (
      <Box sx={classes.modalContent}>
        <Typography sx={classes.titleModal} variant="h2">
          {t('pages/home:clientIdentification')}
        </Typography>
        <InputIds options={clientIdentification} handleOnBlur={() => {}} />
        <Typography sx={classes.secondTextModal} variant="h3">
          {t('shared/common:or')}
        </Typography>
        <Button variant="contained" onClick={() => setIsOpenModalScanDocument(true)}>
          {t('shared/button:OCR')}
        </Button>
      </Box>
    );
  };

  const handleModalScanIDdocumentContent = () => {
    return (
      <Box sx={classes.modalContent}>
        <Box component="img" src={iconScan} />
        <Typography sx={classes.titleModal} variant="h2">
          {t('pages/home:scanIDdocument')}
        </Typography>
        <Typography sx={classes.secondTextModal} variant="h4">
          {t('pages/home:pleaseInsertTheDocumentIntoTheDevice')}
        </Typography>
        <Checkbox checked label={t('pages/home:clientAgreesTheDocument')} />
        <Box sx={classes.wrapperActions}>
          <Button variant="outlined" onClick={() => setIsOpenModalScanDocument(false)}>
            {t('shared/button:back')}
          </Button>
          <Button variant="contained" onClick={handleGoToIDdocument}>
            {t('shared/button:scan')}
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <>
      {isClientIdentification && <Modal open children={handleModalClientIdentificationContent()} />}
      {isOpenModalScanDocument && <Modal open children={handleModalScanIDdocumentContent()} />}
      <LoadingModal />
    </>
  );
};

export default ClientIdentification;
