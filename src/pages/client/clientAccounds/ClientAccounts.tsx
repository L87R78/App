import { Tabs, Card } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import Accounts from './Accounts';

const ClientAccounts = () => {
  const { t } = useI18nNamespaces(['shared/button']);
  const currentTab = useSelector((state: RootState) => state.common.currentTab);

  const tabs = [
    {
      label: t('shared/button:clientAccounts'),
      content: (
        <Card>
          <Accounts />
        </Card>
      ),
    },
  ];

  return <Tabs tabs={tabs} value={currentTab}></Tabs>;
};

export default ClientAccounts;
