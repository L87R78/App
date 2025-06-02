import { ClientInfoAside } from '@/components';
import { Tabs } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { useState } from 'react';
import Accounts from './Accounts';

const ClientAccounts = () => {
  const { t } = useI18nNamespaces(['shared/button']);
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    {
      label: t('shared/button:clientAccounts'),
      content: <Accounts />,
    },
  ];

  return (
    <div className="flex gap-6 w-full h-full">
      <div className="w-full">
        <Tabs tabs={tabs} value={currentTab}></Tabs>
      </div>
      <ClientInfoAside />
    </div>
  );
};

export default ClientAccounts;
