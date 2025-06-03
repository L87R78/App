import { ClientInfoAside } from '@/components';
import { Tabs } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { RootState } from '@/store';
import { lazy, useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import ContactData from './contactData/ContactData.page';
import GdprPage from './gdprDocuments/GDPR.page';
import GdprAside from './gdprDocuments/GdprAside';

const IdDocumentPage = lazy(() => import('./idDocument/IdDocument.page'));
import('./idDocument/IdDocument.page');

const ClientData = () => {
  const { t } = useI18nNamespaces([
    'shared/common',
    'shared/button',
    'pages/client/client_data/id_document',
  ]);

  const scanData = useSelector((state: RootState) => state.onboarding.idDocument.scanData);
  const clientNumber = useSelector((state: RootState) => state.onboarding.idDocument.clientNumber);

  const [currentTab, setCurrentTab] = useState(0);
  const [asideVisibility, setAsideVisibility] = useState({ client: false, gdpr: false });

  const handleChangeTab = useCallback((tabIndex: number) => {
    setCurrentTab(tabIndex);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAsideVisibility({
        client: currentTab === 1,
        gdpr: currentTab === 2,
      });
    }, 150);

    return () => clearTimeout(timeout);
  }, [currentTab]);

  const tabLabels = useMemo(
    () => [
      t('shared/button:IDdocument'),
      t('shared/button:contactData'),
      t('shared/button:GDPRdocuments'),
    ],
    [t]
  );

  const tabs = useMemo(
    () => [
      {
        label: tabLabels[0],
        content: currentTab === 0 ? <IdDocumentPage handleChangeTab={handleChangeTab} /> : null,
      },
      {
        label: tabLabels[1],
        disabled: !scanData,
        content: currentTab === 1 ? <ContactData handleChangeTab={handleChangeTab} /> : null,
      },
      {
        label: tabLabels[2],
        disabled: !scanData,
        content: currentTab === 2 ? <GdprPage /> : null,
      },
    ],
    [currentTab, scanData, handleChangeTab, tabLabels]
  );

  return (
    <div className="flex gap-6 w-full h-full">
      <div className="w-full">
        <Tabs tabs={tabs} value={currentTab} onChange={handleChangeTab} />
      </div>
      {asideVisibility.client && <ClientInfoAside />}
      {asideVisibility.gdpr && (
        <GdprAside clientName={scanData?.nameLatin} clientNumber={clientNumber} />
      )}
    </div>
  );
};

export default ClientData;

//  If you need to preserve state (e.g. forms), you can wrap each tab page in a PersistentWrapper that remembers mounted content:
// const PersistentWrapper = ({ active, children }: { active: boolean; children: React.ReactNode }) => {
//   const [shouldRender, setShouldRender] = useState(active);
//   useEffect(() => {
//     if (active) setShouldRender(true);
//   }, [active]);
//   return shouldRender ? <div hidden={!active}>{children}</div> : null;
// };
