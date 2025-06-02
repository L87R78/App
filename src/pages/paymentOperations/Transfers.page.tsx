import { ClientInfoAside } from '@/components';
import { Tabs } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { useCallback, useState } from 'react';
import TransfersBetweenOwnAccounts from './transfers/TransfersBetweenOwnAccounts';

const Transfers = () => {
  const { t } = useI18nNamespaces(['pages/payment_operations/common']);
  const [currentTab, setCurrentTab] = useState(0);

  const handleChangeTab = useCallback((tabIndex: number) => {
    setCurrentTab(tabIndex);
  }, []);

  const tabs = [
    {
      label: t('pages/payment_operations/common:betweenOwnAccounts'),
      content: <TransfersBetweenOwnAccounts />,
    },
    {
      label: t('pages/payment_operations/common:toBankAccount'),
      content: <p>To be developed...</p>,
    },
  ];

  return (
    <div className="flex gap-6 w-full h-full">
      <div className="w-full">
        <Tabs tabs={tabs} value={currentTab} onChange={handleChangeTab}></Tabs>
      </div>
      <ClientInfoAside />
    </div>
  );
};

export default Transfers;
