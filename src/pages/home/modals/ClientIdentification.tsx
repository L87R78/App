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
          Client identification
        </Typography>
        <InputIds options={clientIdentification} handleOnBlur={() => {}} />
        <Typography sx={classes.secondTextModal} variant="h3">
          or
        </Typography>
        <Button variant="contained" onClick={() => setIsOpenModalScanDocument(true)}>
          OCR
        </Button>
      </Box>
    );
  };

  const handleModalScanIDdocumentContent = () => {
    return (
      <Box sx={classes.modalContent}>
        <Box component="img" src={iconScan} />
        <Typography sx={classes.titleModal} variant="h2">
          Scan ID document
        </Typography>
        <Typography sx={classes.secondTextModal} variant="h4">
          Please insert the document into the device
        </Typography>
        <Checkbox
          checked
          label={'The client agrees that the document provided by him may be scanned.'}
        />
        <Box sx={classes.wrapperActions}>
          <Button variant="outlined" onClick={() => setIsOpenModalScanDocument(false)}>
            Back
          </Button>
          <Button variant="contained" onClick={handleGoToIDdocument}>
            Scan
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
