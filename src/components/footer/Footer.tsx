import { Box, Typography } from '@mui/material';
import iconManager from '../../assets/icons/iconManager.svg';

import classes from './styles';

const Footer = () => {
  return (
    <Box sx={classes.containerFooter}>
      <Box sx={classes.wrapperItems}>
        <Typography sx={classes.title} variant="h5">
          {'Tehnical Support:'}
        </Typography>
        <Box component="img" src={iconManager} />
        <Typography sx={classes.title} variant="h5">
          {'+359 888 38 44 62'}
        </Typography>
      </Box>
      <Box sx={classes.wrapperItems}>
        <Box component="img" src={iconManager} />
        <Typography sx={classes.title} variant="h5">
          {'support@dskbank.bg'}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
