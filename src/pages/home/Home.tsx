import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useI18nNamespaces } from '@/hooks';
import { AppDispatch } from '@/store';
import { addOnboardingData } from '@/store/onboarding/onboardingSlice';

import arrowNarrowDown from '@/assets/icons/arrowNarrowDown.svg';
import clockRewind from '@/assets/icons/clockRewind.svg';
import { OnboardingStep } from '@/common/constants';
import { LineChart } from '@/components';

import ClientIdentification from './modals/ClientIdentification';

import classes from './styles';

const Home = () => {
  const { t } = useI18nNamespaces([]);

  const dispatch = useDispatch<AppDispatch>();
  const [isStartService, setIsStartService] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleStartService = () => {
    dispatch(addOnboardingData(OnboardingStep.StartService));
    setIsOpenModal(true);
  };

  return (
    <>
      {isOpenModal && <ClientIdentification />}
      <Box sx={classes.layout}>
        <Box sx={classes.containerWelcome}>
          <Typography sx={classes.title} variant="h1">
            {t('pages/home:title', { text: 'Maria' })}
          </Typography>
          <Typography sx={classes.description} variant="h2">
            {t('pages/home:description')}
          </Typography>
          <Box sx={classes.wrapperWaitingBox}>
            <Typography sx={classes.textWaitingPeople} variant="h2">
              {t('pages/home:waitingTickets')}
            </Typography>
            <Typography sx={classes.textWaitingPeople} variant="h2">
              2
            </Typography>
          </Box>
          <Box sx={classes.wrapperActions}>
            <Button
              disabled={isStartService}
              variant="contained"
              onClick={() => setIsStartService(true)}
            >
              {t('shared/button:nextClient')}
            </Button>
            <Button disabled={!isStartService} variant="outlined" onClick={handleStartService}>
              {t('shared/button:startService')}
            </Button>
          </Box>
        </Box>
        <Box sx={classes.containerChart}>
          <Box sx={classes.containerFirstSectionChart}>
            <Box sx={classes.wrapperBoxInfo}>
              <Typography sx={classes.titleChart} variant="h3">
                {t('pages/home:chart:servedCustomers')}
              </Typography>
              <Typography sx={classes.titleChart} variant="h3">
                354
              </Typography>
            </Box>
            <Box sx={classes.wrapperBoxInfo}>
              <Typography sx={classes.descriptionChart} variant="h3">
                {t('pages/home:chart:totalNumberCustomersServed')}
              </Typography>
              <Box sx={classes.wrapperTotalCustomersInfo}>
                <Box component="img" src={arrowNarrowDown} />
                <Typography sx={classes.descriptionPercentageChart} variant="h3">
                  {/* {`${'21.3%'} ${t('pages/home:chart:lowerThisMonth')}`} */}
                  {t('pages/home:chart:lowerThisMonth', { value: '21.3%' })}
                </Typography>
              </Box>
            </Box>
            <LineChart />
          </Box>
          <Box sx={classes.containerSecondSectionChart}>
            <Box sx={classes.wrapperLastClientInfo}>
              <Box component="img" src={clockRewind} />
              <Box>
                <Typography sx={classes.titleChart} variant="h3">
                  {t('pages/home:lastClient', { text: 'Ivan Georgiev Ivanov' })}
                </Typography>
                <Typography sx={classes.descriptionChart} variant="h3">
                  {t('pages/home:clientID', { value: '23254565466543' })}
                </Typography>
              </Box>
            </Box>
            <Box sx={classes.wrapperAllClientInfo}>
              <Typography sx={classes.titleAllClients} variant="h3">
                {t('pages/home:allClientsForDay')}
              </Typography>
              <Button disabled variant="text">
                {t('shared/button:view')}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
