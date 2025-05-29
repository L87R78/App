import iconDSK from '@/assets/icons/iconDSK.svg';
import { Box } from '@/components/ui';

import classes from './styles';

interface LoaderProps {
  isModal?: boolean;
}

const Loader = (props: LoaderProps) => {
  const { isModal } = props;

  return (
    <Box sx={classes.layoutLoader(isModal)}>
      <Box component="img" src={iconDSK} sx={classes.imageLoader} />
    </Box>
  );
};

export default Loader;
