import iconManager from '@/assets/icons/iconManager.svg';

import { Box, Typography } from '../../ui';
import classes from './styles';

const Footer = () => {
  return (
    <Box sx={classes.containerFooter}>
      <Box sx={classes.wrapperItems}>
        <Typography variant="body2" sx={classes.title}>
          {'Tehnical Support:'}
        </Typography>
        <Box component="img" src={iconManager} />
        <Typography variant="body2" sx={classes.title}>
          {'+359 888 38 44 62'}
        </Typography>
      </Box>
      <Box sx={classes.wrapperItems}>
        <Box component="img" src={iconManager} />
        <Typography variant="body2" sx={classes.title}>
          {'support@dskbank.bg'}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
