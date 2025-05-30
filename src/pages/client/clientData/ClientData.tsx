import { Tabs } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { RootState } from '@/store';
import { setCurrentTab } from '@/store/common/commonSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IdDocumentPage } from './idDocument/IdDocument.page';

const ClientData = () => {
  const { t } = useI18nNamespaces([
    'shared/common',
    'shared/button',
    'pages/client/client_data/id_document',
  ]);
  const dispatch = useDispatch();
  const currentTab = useSelector((state: RootState) => state.common.currentTab);

  const tabs = [
    {
      label: t('shared/button:IDdocument'),
      content: <IdDocumentPage />,
    },
    {
      label: t('shared/button:contactData'),
      content: <p>Contact data</p>,
    },
  ];
  return (
    <Tabs tabs={tabs} value={currentTab} onChange={index => dispatch(setCurrentTab(index))}></Tabs>
  );
};

export default ClientData;
