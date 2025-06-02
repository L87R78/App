import { Avatar } from '@mui/material';

import iconNotifications from '@/assets/icons/iconNotifications.svg';
import { Box, Button, Typography } from '@/components/ui';

import classes from './styles';

interface HeaderProps {
  isOpenNavigation: boolean;
}
const Header = (props: HeaderProps) => {
  const { isOpenNavigation } = props;

  return (
    <Box sx={classes.containerHeader(isOpenNavigation)}>
      <Box sx={classes.wrapperContent}>
        <Box sx={classes.wrapperAvatar}>
          <Avatar sx={classes.avatar}>MP</Avatar>
          <Box>
            <Typography variant="h3" sx={classes.name}>
              Maria Petrova
            </Typography>
            <Typography variant="h4" sx={classes.jobTitle}>
              Business Consultant
            </Typography>
          </Box>
          {/* // TODO: add user settings menu */}
          {/* {isOpenUserSettings && (
            <Box sx={classes.wrapperUserSettings}>
              <Box sx={classes.wrapperRow}>
                <Box component="img" sx={classes.iconSettings} src={iconNotifications} />
                <Typography variant="h4" sx={classes.settingsText}>
                  Settings
                </Typography>
              </Box>
              <Box sx={classes.wrapperRow}>
                <Box component="img" sx={classes.iconSettings} src={iconNotifications} />
                <Typography variant="h4" sx={classes.settingsText}>
                  Favorites
                </Typography>
              </Box>
              <Box sx={classes.wrapperRow}>
                <Box component="img" sx={classes.iconSettings} src={iconNotifications} />
                <Typography variant="h4" sx={classes.settingsText}>
                  Log Out
                </Typography>
              </Box>
            </Box>
          )} */}
        </Box>
        <Box component="img" sx={classes.iconNotifications} src={iconNotifications} />
        <Button variant="contained" color="primary" size="small">
          Завърши услуга
        </Button>
      </Box>
    </Box>
  );
};
export default Header;
