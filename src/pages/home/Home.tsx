import { Box, Button } from '@mui/material';

import classes from './styles';

const Home = () => {
  console.log('Home');
  return (
    <Box sx={classes.layout}>
      Home Page
      <Button variant="contained">Click me</Button>
      <Button variant="outlined">Click me</Button>
    </Box>
  );
};

export default Home;
