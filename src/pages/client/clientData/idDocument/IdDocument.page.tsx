import { ResponseStatus } from '@/common/constants';
import { LoadingModal } from '@/components/shared';
import { Button, Card, Checkbox, Modal } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { RootState } from '@/store';
import { useAppDispatch } from '@/store/hooks';
import { addClient, fetchOnboardingData } from '@/store/onboarding/onboardingApi';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import IdDocument from './IdDocument';
import { classes } from './styles';
import ValidationBlock from './ValidationBlocks';

export const IdDocumentPage = ({
  handleChangeTab,
}: {
  handleChangeTab: (index: number) => void;
}) => {
  const dispatch = useAppDispatch();
  const { t } = useI18nNamespaces(['pages/client/client_data/id_document', 'shared/common']);
  const isDbScanAvailable = useSelector(
    (state: RootState) => state.onboarding.idDocument.isDbScanAvailable
  );
  const status = useSelector((state: RootState) => state.onboarding.status);
  const { clientNumber, scanData } = useSelector((state: RootState) => state.onboarding.idDocument);

  const [isCheckAgainModalVisible, setCheckAgainModalVisible] = useState(false);
  const [isGoToContactDataModalVisible, setGoToContactModalVisible] = useState(false);

  const handleCheckAgain = () => {
    setCheckAgainModalVisible(true);
    setTimeout(() => {
      setCheckAgainModalVisible(false);
    }, 1000);
  };

  const handleContinueToContactData = () => {
    setGoToContactModalVisible(false);
    handleChangeTab(1);
    dispatch(addClient());
  };

  useEffect(() => {
    if (!scanData.ucn) {
      dispatch(fetchOnboardingData());
    }
  }, [dispatch]);

  return status === ResponseStatus.PENDING || status === ResponseStatus.IDLE ? (
    <LoadingModal />
  ) : (
    <div className={classes.pageWrapper}>
      <div className={classes.topSection}>
        <div className={isDbScanAvailable ? classes.gridContainer : classes.flexContainer}>
          <IdDocument setGoToContactModalVisible={setGoToContactModalVisible} />
          {isDbScanAvailable && <IdDocument isDbScan />}
        </div>
      </div>

      {isDbScanAvailable ? (
        <div className={classes.gridLayout}>
          <div className={classes.validationSection}>
            <ValidationBlock
              validationHeader={t('pages/client/client_data/id_document:validationScannedDocument')}
              validationBody={[
                t('pages/client/client_data/id_document:mrzOcr'),
                t('pages/client/client_data/id_document:uvElements'),
              ]}
            />
            <ValidationBlock
              validationHeader={t('pages/client/client_data/id_document:validationMVRCheck')}
              validationBody={[t('pages/client/client_data/id_document:validationMVRValid')]}
              hasButtonCheckAgain
              onCheckAgain={handleCheckAgain}
            />
            <Card>
              <div className={classes.cardFooter}>
                <Checkbox label={t('pages/client/client_data/id_document:newClient')} />
                <Button>{t('pages/client/client_data/id_document:createNewClient')}</Button>
              </div>
            </Card>
          </div>
          <div className={classes.bottomControls}>
            <div className="flex-1"></div>
            <div className="flex justify-end">
              <Button>{t('shared/common:next')}</Button>
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.gridContainer}>
          <ValidationBlock
            validationHeader={t('pages/client/client_data/id_document:validationScannedDocument')}
            validationBody={[
              t('pages/client/client_data/id_document:mrzOcr'),
              t('pages/client/client_data/id_document:uvElements'),
            ]}
          />
          <ValidationBlock
            validationHeader={t('pages/client/client_data/id_document:validationMVRCheck')}
            validationBody={[t('pages/client/client_data/id_document:validationMVRValid')]}
            hasButtonCheckAgain
            onCheckAgain={handleCheckAgain}
          />
        </div>
      )}

      <LoadingModal />
      <Modal open={isGoToContactDataModalVisible}>
        <div className={classes.modalContent}>
          {/* TODO:Add icon */}

          <div className="text-primary m-2 text-center">
            <p className={classes.customerDataSavedText}>
              {t('pages/client/client_data/id_document:customerDataSavedFirstText')}
            </p>

            <div className={classes.wrapperCustomerDataSavedTexts}>
              <p className={classes.customerDataSavedText}>
                {t('pages/client/client_data/id_document:customerDataSavedThirdText')}
              </p>
              <p className={classes.assignedCustomerValue}>{clientNumber}</p>
            </div>
          </div>

          <section className="flex flex-row gap-6">
            <Button onClick={handleContinueToContactData}>
              {t('pages/client/client_data/id_document:continueToContactDetails')}
            </Button>
          </section>
        </div>
      </Modal>

      <Modal open={isCheckAgainModalVisible}>
        <h3>{t('pages/client/client_data/id_document:checkingAgain')}</h3>
      </Modal>
    </div>
  );
};
