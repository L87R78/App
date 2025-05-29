import { useEffect, useRef, useState } from 'react';

import { Box, Button, Typography } from '../shared';

import iconNotifications from '@/assets/icons/iconNotifications.svg';
import imageAvatar from '@/assets/images/imageAvatar.svg';

import classes from './styles';

interface HeaderProps {
  isOpenNavigation: boolean;
}

const Header = (props: HeaderProps) => {
  const { isOpenNavigation } = props;

  const [isOpenUserSettings, setIsOpenUserSettings] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsOpenUserSettings(false);
      }
    };

    if (isOpenUserSettings) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpenUserSettings]);

  return (
    <Box sx={classes.containerHeader(isOpenNavigation)}>
      <Box sx={classes.wrapperContent}>
        <Box
          ref={settingsRef}
          sx={classes.wrapperAvatar}
          onClick={() => setIsOpenUserSettings(!isOpenUserSettings)}
        >
          <Box component="img" sx={classes.iconAvatar} src={imageAvatar} />
          <Box>
            <Typography variant="h3" sx={classes.name}>
              Мария Петрова
            </Typography>
            <Typography variant="h4" sx={classes.jobTitle}>
              Business Consultant
            </Typography>
          </Box>
          {isOpenUserSettings && (
            <Box sx={classes.wrapperUserSettings}>
              <Box sx={classes.wrapperRow}>
                <Box component="img" sx={classes.iconAvatar} src={iconNotifications} />
                <Typography variant="h4" sx={classes.settingsText}>
                  Settings
                </Typography>
              </Box>
              <Box sx={classes.wrapperRow}>
                <Box component="img" sx={classes.iconAvatar} src={iconNotifications} />
                <Typography variant="h4" sx={classes.settingsText}>
                  Favorites
                </Typography>
              </Box>
              <Box sx={classes.wrapperRow}>
                <Box component="img" sx={classes.iconAvatar} src={iconNotifications} />
                <Typography variant="h4" sx={classes.settingsText}>
                  Log Out
                </Typography>
              </Box>
            </Box>
          )}
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
