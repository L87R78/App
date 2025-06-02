import { AppDispatch } from '@/store';
import { addOnbordingData } from '@/store/onbording/onbordingSlice';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import arrowNarrowDown from '@/assets/icons/arrowNarrowDown.svg';
import clockRewind from '@/assets/icons/clockRewind.svg';
import { OnboardingStep } from '@/common/constants';
import { LineChart } from '@/components';

import classes from './styles';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleStartService = () => {
    dispatch(addOnbordingData(OnboardingStep.StartService));
  };

  return (
    <Box sx={classes.layout}>
      <Box sx={classes.containerWelcome}>
        <Typography sx={classes.title} variant="h1">
          Welcome, Maria
        </Typography>
        <Typography sx={classes.description} variant="h2">
          Успешен ден
        </Typography>
        <Box sx={classes.wrapperWaitingBox}>
          <Typography sx={classes.textWaitingPeople} variant="h2">
            Чакащи
          </Typography>
          <Typography sx={classes.textWaitingPeople} variant="h2">
            2
          </Typography>
        </Box>
        <Box sx={classes.wrapperActions}>
          <Button variant="contained"> Следваш клиент </Button>
          <Button variant="outlined" onClick={handleStartService}>
            Стартирай обслужване
          </Button>
        </Box>
      </Box>
      <Box sx={classes.containerChart}>
        <Box sx={classes.containerFirstSectionChart}>
          <Box sx={classes.wrapperBoxInfo}>
            <Typography sx={classes.titleChart} variant="h3">
              Served customers
            </Typography>
            <Typography sx={classes.titleChart} variant="h3">
              354
            </Typography>
          </Box>
          <Box sx={classes.wrapperBoxInfo}>
            <Typography sx={classes.descriptionChart} variant="h3">
              Total number of customers served
            </Typography>
            <Box sx={classes.wrapperTotalCustomersInfo}>
              <Box component="img" src={arrowNarrowDown} />
              <Typography sx={classes.descriptionPercentageChart} variant="h3">
                21.3% lower this mounth
              </Typography>
            </Box>
          </Box>

          <LineChart />
        </Box>
        {/* <Box sx={classes.secondSectionChart}></Box> */}
        <Box sx={classes.containerSecondSectionChart}>
          <Box sx={classes.wrapperLastClientInfo}>
            <Box component="img" src={clockRewind} />
            <Box>
              <Typography sx={classes.titleChart} variant="h3">
                Last client: Ivan Georgiev Ivanov
              </Typography>
              <Typography sx={classes.descriptionChart} variant="h3">
                Client ID: 23254565466543
              </Typography>
            </Box>
          </Box>
          <Box sx={classes.wrapperAllClientInfo}>
            <Typography sx={classes.titleAllClients} variant="h3">
              All clients for the day
            </Typography>
            <Button disabled variant="text">
              View
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
