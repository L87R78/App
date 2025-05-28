import { Box, Button } from '@mui/material';

import classes from './styles';

const Home = () => {
  return (
    <Box sx={classes.layout}>
      <Button variant="contained">hello</Button>
      <Button variant="outlined">Open Modal</Button>
    </Box>
  );
};

export default Home;
