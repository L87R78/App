import { ClientInfoAside } from '@/components';
import { Tabs } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { RootState } from '@/store';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import GdprPage from './gdprDocuments/GDPR.page';
import { IdDocumentPage } from './idDocument/IdDocument.page';

const ClientData = () => {
  const { t } = useI18nNamespaces([
    'shared/common',
    'shared/button',
    'pages/client/client_data/id_document',
  ]);

  const [currentTab, setCurrentTab] = useState(0);
  const [gdprTabContent, setGdprTabContent] = useState<React.ReactNode>(null);

  const scanData = useSelector((state: RootState) => state.onboarding.idDocument.scanData);
  const memoizedScanData = useMemo(() => scanData, [scanData]);

  const handleChangeTab = useCallback((tabIndex: number) => {
    setCurrentTab(tabIndex);
  }, []);

  const handleChangeTabContent = useCallback((content: React.ReactNode) => {
    setGdprTabContent(content);
  }, []);

  useEffect(() => {
    if (!gdprTabContent) {
      setGdprTabContent(<GdprPage />);
    }
  }, [gdprTabContent, handleChangeTabContent]);

  const tabs = useMemo(
    () => [
      {
        label: t('shared/button:IDdocument'),
        content: <IdDocumentPage handleChangeTab={handleChangeTab} />,
      },
      {
        label: t('shared/button:contactData'),
        content: <p>Contact data</p>,
        disabled: !memoizedScanData,
      },
      {
        label: t('shared/button:GDPRdocuments'),
        content: gdprTabContent,
        disabled: !memoizedScanData,
      },
    ],
    [memoizedScanData, handleChangeTab, handleChangeTabContent, gdprTabContent, t]
  );

  const showAside = currentTab === 1;

  return (
    <div className="flex gap-6 w-full h-full">
      <div className="w-full">
        <Tabs tabs={tabs} value={currentTab} onChange={handleChangeTab} />
      </div>
      {showAside && <ClientInfoAside />}
    </div>
  );
};

export default ClientData;
