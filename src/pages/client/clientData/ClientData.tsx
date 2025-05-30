import { ClientInfoAside } from '@/components';
import { Tabs } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { RootState } from '@/store';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IdDocumentPage } from './idDocument/IdDocument.page';

const ClientData = () => {
  const { t } = useI18nNamespaces([
    'shared/common',
    'shared/button',
    'pages/client/client_data/id_document',
  ]);
  const [currentTab, setCurrentTab] = useState(0);
  const { scanData } = useSelector((state: RootState) => state.onboarding.idDocument);
  const tabs = [
    {
      label: t('shared/button:IDdocument'),
      content: <IdDocumentPage handleChangeTab={setCurrentTab} />,
    },
    {
      label: t('shared/button:contactData'),
      content: <p>Contact data</p>,
      disabled: !scanData,
    },
  ];

  const showAside = currentTab === 1;

  return (
    <div className="flex gap-6 w-full h-full">
      <div className={'w-full'}>
        <Tabs tabs={tabs} value={currentTab} onChange={index => setCurrentTab(index)} />
      </div>
      {showAside && <ClientInfoAside />}
    </div>
  );
};

export default ClientData;
