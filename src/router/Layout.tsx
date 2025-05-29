import { Box } from '@/components/ui';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Navigation } from '../components';
import classes from './styles';

const Layout = () => {
  const [isCollapseNavigation, setIsCollapseNavigation] = useState(false);

  const handleNavigation = (isOpen: boolean) => {
    setIsCollapseNavigation(isOpen);
  };

  return (
    <Box sx={classes.layout}>
      <Navigation handleNavigation={handleNavigation} />
      <Header isOpenNavigation={isCollapseNavigation} />
      <Box sx={classes.main(isCollapseNavigation)}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
