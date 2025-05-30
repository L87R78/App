import { LoadingModal } from '@/components';
import { Button, Checkbox, Modal, TextField } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { useState } from 'react';
import { classes } from './styles';

const GdprPepsPage: React.FC<{ onBack: () => void; onNext: () => void }> = ({ onBack, onNext }) => {
  const { t } = useI18nNamespaces([
    'pages/client/client_data/gdpr',
    'shared/button',
    'shared/label',
  ]);

  const [isFilledByAuthorizedPerson, setIsFilledByAuthorizedPerson] = useState(false);
  const [hasBeenEntitled, setHasBeenEntitled] = useState(false);
  const [hasBeenConnected, setHasBeenConnected] = useState(false);
  const [isReadyModalVisible, setIsReadyModalVisible] = useState(false);
  const [isSignButtonVisible, setIsSignButtonVisible] = useState(false);
  const [isSigningModalVisible, setIsSigningModalVisible] = useState(false);
  const [isSignedSuccessModalVisible, setIsSignedSuccessModalVisible] = useState(false);

  const saveAndContinue = () => {
    setIsReadyModalVisible(true);
  };

  const signDocuments = () => {
    setIsSigningModalVisible(true);
    setTimeout(() => {
      setIsSigningModalVisible(false);
      setIsSignedSuccessModalVisible(true);
    }, 1000);
  };

  return (
    <div className={classes.container}>
      <section className={classes.scrollableSection}>
        <div className={classes.headingCenter}>
          <h3>{t('pages/client/client_data/gdpr:pepsPage.heading1')}</h3>
          <h3>{t('pages/client/client_data/gdpr:pepsPage.heading2')}</h3>
          <h3>{t('pages/client/client_data/gdpr:pepsPage.heading3')}</h3>
        </div>

        <div className={classes.grid2Cols}>
          <Checkbox
            label={t('pages/client/client_data/gdpr:pepsPage.filledByAuthPerson')}
            checked={isFilledByAuthorizedPerson}
            onChange={e => setIsFilledByAuthorizedPerson(e.target.checked)}
          />
          {/* TODO:this is the select-input-checkbox THE ONLY THING NEEDED IS TO PLACE A SEARCH ICON AT END */}
          <TextField disabled={!isFilledByAuthorizedPerson} />
        </div>

        <div className={classes.grid2Cols}>
          <div className={classes.cardWrapper}>
            <Checkbox
              label={t('pages/client/client_data/gdpr:pepsPage.agreement1')}
              checked={!hasBeenEntitled}
              onChange={() => setHasBeenEntitled(prev => !prev)}
            />
            <Checkbox
              label={t('pages/client/client_data/gdpr:pepsPage.agreement2')}
              checked={hasBeenEntitled}
              onChange={e => setHasBeenEntitled(e.target.checked)}
            />
            <TextField fullWidth disabled={!hasBeenEntitled} />
          </div>
          <div className={classes.cardWrapper}>
            <Checkbox
              label={t('pages/client/client_data/gdpr:pepsPage.agreement3')}
              checked={!hasBeenConnected}
              onChange={() => setHasBeenConnected(prev => !prev)}
            />
            <Checkbox
              label={t('pages/client/client_data/gdpr:pepsPage.agreement4')}
              checked={hasBeenConnected}
              onChange={e => setHasBeenConnected(e.target.checked)}
            />
            <TextField fullWidth disabled={!hasBeenConnected} />
          </div>
        </div>

        <section>
          <div
            dangerouslySetInnerHTML={{
              __html: t('pages/client/client_data/gdpr:pepsPage.listOfCases'),
            }}
          />
        </section>

        <section>
          <h4 className={classes.textBold}>
            {t('pages/client/client_data/gdpr:pepsPage.declaration')}
          </h4>
          <TextField fullWidth disabled={!hasBeenEntitled} />
          <p>{t('pages/client/client_data/gdpr:pepsPage.declarationSubtext')}</p>
        </section>
      </section>

      <div className={classes.footerActions}>
        <Button variant="outlined" onClick={onBack}>
          {t('shared/button:back')}
        </Button>
        {/* todo:addicons */}
        {isSignButtonVisible ? (
          <Button onClick={signDocuments}>{t('pages/client/client_data/gdpr:toSigning')}</Button>
        ) : (
          <Button onClick={saveAndContinue}>{t('shared/button:saveAndContinue')}</Button>
        )}
      </div>

      <Modal open={isReadyModalVisible} onClose={() => setIsReadyModalVisible(false)}>
        {/* todo:addicon           */}
        <>
          <h4>{t('pages/client/client_data/gdpr:allDocsAreFilled')}</h4>
          <h4 className={classes.textBold}>
            {t('pages/client/client_data/gdpr:continueToSignOrPrint')}
          </h4>
          <Button
            onClick={() => {
              setIsReadyModalVisible(false);
              setIsSignButtonVisible(true);
            }}
          >
            OK
          </Button>
        </>
      </Modal>

      {isSigningModalVisible && (
        <LoadingModal text={t('pages/client/client_data/gdpr:docsAreBeingSigned')} />
      )}

      <Modal open={isSignedSuccessModalVisible} onClose={() => {}}>
        <div className={classes.sectionCentered}>
          {/* todo:add icon */}
          <h4>{t('pages/client/client_data/gdpr:docsSignedSuccessfuly')}</h4>
          <Button
            onClick={() => {
              // todo:Navigate to page
            }}
          >
            {t('shared/button:continue')}
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default GdprPepsPage;
