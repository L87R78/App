import { LoadingModal } from '@/components/shared';
import { Button, Card, Checkbox, Modal } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { RootState } from '@/store';
import { setCurrentTab } from '@/store/common/commonSlice';
import {
  setCheckAgainModalVisible,
  setGoToContactModalVisible,
} from '@/store/onbording/onbordingSlice';
import { useDispatch, useSelector } from 'react-redux';
import IdDocument from './IdDocument';
import { classes } from './styles';
import ValidationBlock from './ValidationBlocks';

export const IdDocumentPage = () => {
  const dispatch = useDispatch();
  const { t } = useI18nNamespaces(['pages/client/client_data/id_document', 'shared/common']);

  const isDbScanAvailable = useSelector(
    (state: RootState) => state.onboarding.idDocument.isDbScanAvailable
  );
  const isGoToContactDataModalVisible = useSelector(
    (state: RootState) => state.onboarding.idDocument.isGoToContactDataModalVisible
  );
  const isCheckAgainModalVisible = useSelector(
    (state: RootState) => state.onboarding.idDocument.isCheckAgainModalVisible
  );

  const handleCheckAgain = () => {
    dispatch(setCheckAgainModalVisible(true));
    setTimeout(() => {
      dispatch(setCheckAgainModalVisible(false));
    }, 1000);
  };

  const handleContinueToContactData = () => {
    dispatch(setGoToContactModalVisible(false));
    dispatch(setCurrentTab(1));
  };

  return (
    <div className={classes.pageWrapper}>
      <div className={classes.topSection}>
        <div className={isDbScanAvailable ? classes.gridContainer : classes.flexContainer}>
          <IdDocument />
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
                {t('pages/client/client_data/id_document:customerDataSavedSecondText')}
              </p>
              <p className={classes.riskClassificationValue}>Low risk</p>
            </div>

            <div className={classes.wrapperCustomerDataSavedTexts}>
              <p className={classes.customerDataSavedText}>
                {t('pages/client/client_data/id_document:customerDataSavedThirdText')}
              </p>
              <p className={classes.assignedCustomerValue}>1234567</p>
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
