import { Box } from '../shared';
import classes from './styles';

interface HeaderProps {
  isOpenNavigation: boolean;
}

const Header = (props: HeaderProps) => {
  const { isOpenNavigation } = props;

  return <Box sx={classes.containerHeader(isOpenNavigation)}>Header</Box>;
};

export default Header;
