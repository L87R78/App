import { Box, Button, Typography } from '@mui/material';

import classes from './styles';

const Home = () => {
  return (
    <Box sx={classes.layout}>
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
        <Button variant="outlined"> Стартирай обслужване </Button>
      </Box>
    </Box>
  );
};

export default Home;
