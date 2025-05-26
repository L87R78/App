import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import { Header, Footer, Navigation } from '../components';

import classes from './styles';

const Layout = () => {
  return (
    <Box sx={classes.layout}>
      <Navigation />
      <Header />
      <Box sx={classes.main}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
