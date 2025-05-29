import { Box, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/index';
import { addOnbordingData } from '../../store/onbording/onbordingSlice';

import { OnboardingStep } from '../../common/constants';
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
      <Box sx={classes.containerChart}>Chart - In progress...</Box>
    </Box>
  );
};

export default Home;
