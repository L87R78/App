import { Box, Select } from '@/components/ui';
import { useI18nNamespaces } from '../../hooks';
import classes from './styles';

const Home = () => {
  const { t, i18n } = useI18nNamespaces(['shared/common', 'pages/home']);

  const handleChange = event => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <Box sx={classes.layout}>
      <h1>{t('pleaseWait')}</h1>
      <p>{t('pages/home:chart.servedCustomers')}</p>
      <Select
        value={i18n.language}
        onChange={handleChange}
        options={[
          { label: 'English', value: 'en' },
          { label: 'bulg', value: 'bg' },
        ]}
      />
    </Box>
  );
};

export default Home;
