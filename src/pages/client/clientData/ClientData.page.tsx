import { ClientInfoAside } from '@/components';
import { Tabs } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { RootState } from '@/store';
import { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import ContactData from './contactData/ContactData.page';
import GdprPage from './gdprDocuments/GDPR.page';
import GdprAside from './gdprDocuments/GdprAside';
import { IdDocumentPage } from './idDocument/IdDocument.page';

const ClientData = () => {
  const { t } = useI18nNamespaces([
    'shared/common',
    'shared/button',
    'pages/client/client_data/id_document',
  ]);

  const [currentTab, setCurrentTab] = useState(0);

  const scanData = useSelector((state: RootState) => state.onboarding.idDocument.scanData);
  const clientNumber = useSelector((state: RootState) => state.onboarding.idDocument.clientNumber);
  const memorizedScanData = useMemo(() => scanData, [scanData]);
  const memorizedClientNumber = useMemo(() => clientNumber, [clientNumber]);

  const handleChangeTab = useCallback((tabIndex: number) => {
    setCurrentTab(tabIndex);
  }, []);

  const tabs = useMemo(
    () => [
      {
        label: t('shared/button:IDdocument'),
        content: <IdDocumentPage handleChangeTab={handleChangeTab} />,
      },
      {
        label: t('shared/button:contactData'),
        content: <ContactData handleChangeTab={handleChangeTab} />,
        disabled: !memorizedScanData,
      },
      {
        label: t('shared/button:GDPRdocuments'),
        content: <GdprPage />,
        disabled: !memorizedScanData,
      },
    ],
    [memorizedScanData, handleChangeTab, t]
  );

  const showClientInfoAside = currentTab === 1;
  const showGdprAside = currentTab === 2;

  return (
    <div className="flex gap-6 w-full h-full">
      <div className="w-full">
        <Tabs tabs={tabs} value={currentTab} onChange={handleChangeTab} />
      </div>
      {showClientInfoAside && <ClientInfoAside />}
      {showGdprAside && (
        <GdprAside clientName={memorizedScanData?.nameLatin} clientNumber={memorizedClientNumber} />
      )}
    </div>
  );
};

export default ClientData;
