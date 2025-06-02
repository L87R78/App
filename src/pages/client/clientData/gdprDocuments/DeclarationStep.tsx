import { Button, Checkbox, Switch, TextField, Typography } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { useState } from 'react';
import { classes } from './styles';

const DeclarationStep: React.FC<{ onNext: () => void; onBack: () => void }> = ({
  onNext,
  onBack,
}) => {
  const { t } = useI18nNamespaces([
    'pages/client/client_data/gdpr',
    'shared/button',
    'shared/label',
  ]);

  const [isTaxPurposes, setIsTaxPurposes] = useState(false);
  const [isDeclarationIsNotSigned, setIsDeclarationIsNotSigned] = useState(false);
  const [isMatchesPermanentAddress, setIsMatchesPermanentAddress] = useState(true);

  const handleSaveAndContinue = () => {
    onNext();
  };

  return (
    <div className={classes.container}>
      <section className={classes.scrollableSection}>
        <div className={classes.wrapperTitle}>
          <Typography variant="h6">
            {t('pages/client/client_data/gdpr:declaration.heading')}
          </Typography>
          <Typography variant="h6">
            {t('pages/client/client_data/gdpr:declaration.subheading')}
          </Typography>
        </div>

        <div className={classes.wrapperAddressSection}>
          <Typography className={classes.titleField}>
            {t('pages/client/client_data/gdpr:declaration.residenceAddress')}
          </Typography>
          <div className={classes.checkboxSameAddress}>
            <Checkbox
              checked={isMatchesPermanentAddress}
              label={t('pages/client/client_data/gdpr:declaration.matchesPermanentAddress')}
              onChange={() => setIsMatchesPermanentAddress(prev => !prev)}
            />
          </div>

          <div className={classes.wrapperFields(3)}>
            <TextField
              label={t('shared/label:country')}
              disabled={isMatchesPermanentAddress}
              value="България"
            />
            <TextField
              label={t('shared/label:inhabitedPlace')}
              disabled={isMatchesPermanentAddress}
              value="София"
            />
            <TextField
              label={t('shared/label:neighbourhood')}
              disabled={isMatchesPermanentAddress}
              value="Манастирски ливади"
            />
          </div>

          <div className={classes.wrapperFields(2)}>
            <TextField
              label={t('shared/label:street')}
              disabled={isMatchesPermanentAddress}
              value="Цветна градина 45"
            />
            <div className={classes.wrapperNumberAddressFields}>
              <TextField
                label={t('shared/label:number')}
                disabled={isMatchesPermanentAddress}
                value="12"
              />
              <TextField
                label={t('shared/label:floor')}
                disabled={isMatchesPermanentAddress}
                value="2"
              />
              <TextField
                label={t('shared/label:aptNumber')}
                disabled={isMatchesPermanentAddress}
                value="4"
              />
              <TextField
                label={t('shared/label:postalCode')}
                disabled={isMatchesPermanentAddress}
                value="6666"
              />
            </div>
          </div>
        </div>

        <div className={classes.wrapperCitizenshipSection}>
          <Typography className={classes.titleField}>Citizenship</Typography>
          <div className={classes.wrapperFields(2)}>
            <TextField label={t('shared/label:citizenship')} disabled value="България" />
            <TextField label={t('shared/label:anotherNationality')} disabled value="" />
          </div>
        </div>

        <div className={classes.wrapperJurisdictionSection}>
          <Typography className={classes.titleField}>
            {t('pages/client/client_data/gdpr:declaration.jurysdictionTaxNumber')}
          </Typography>
          <div className={classes.wrapperFields(1)}>
            <TextField
              label={t('pages/client/client_data/gdpr:declaration.jurysdictionTaxGoals')}
              disabled
              value="Република България"
            />
          </div>
          <div className={classes.wrapperFields(1)}>
            <TextField
              label={t('pages/client/client_data/gdpr:declaration.taxIdFromJurysdiction')}
              disabled
              value="9508010133"
            />
          </div>
        </div>

        <div className={classes.wrapperCheckboxSection}>
          <Typography className={classes.titleField}>
            {t('pages/client/client_data/gdpr:declaration.residentOfTax')}
          </Typography>
          <Switch value={isTaxPurposes} onChange={() => setIsTaxPurposes(prev => !prev)} />
        </div>

        {isTaxPurposes && (
          <>
            <div className={classes.wrapperTaxPurposes}>
              <TextField
                label={t('pages/client/client_data/gdpr:declaration.jurysdictionTaxGoals')}
                value=""
              />
            </div>
            <div className={classes.wrapperTaxPurposes}>
              <div className={classes.wrapperPlaceOfResidence}>
                <TextField
                  label={t('shared/label:inhabitedPlace')}
                  disabled={isMatchesPermanentAddress}
                  value=""
                />
                <TextField
                  label={t('shared/label:neighbourhood')}
                  disabled={isMatchesPermanentAddress}
                  value=""
                />
              </div>
            </div>
            <div className={classes.wrapperTaxPurposes}>
              <div className={classes.wrapperNumberAddressFields}>
                <TextField
                  label={t('shared/label:street')}
                  disabled={isMatchesPermanentAddress}
                  value=""
                />
                <TextField
                  label={t('shared/label:number')}
                  disabled={isMatchesPermanentAddress}
                  value=""
                />
                <TextField
                  label={t('shared/label:floor')}
                  disabled={isMatchesPermanentAddress}
                  value=""
                />
                <TextField
                  label={t('shared/label:aptNumber')}
                  disabled={isMatchesPermanentAddress}
                  value=""
                />
                <TextField
                  label={t('shared/label:postalCode')}
                  disabled={isMatchesPermanentAddress}
                  value=""
                />
              </div>
            </div>
            <div className={classes.wrapperTaxPurposes}>
              <TextField
                label={t('pages/client/client_data/gdpr:declaration.taxIdFromJurysdiction')}
                value=""
              />
            </div>
          </>
        )}

        <div className={classes.wrapperCheckboxSection}>
          <Typography className={classes.titleField}>
            {t('pages/client/client_data/gdpr:declaration.isntSigned')}
          </Typography>
          <Switch
            value={isDeclarationIsNotSigned}
            onChange={() => setIsDeclarationIsNotSigned(prev => !prev)}
          />
        </div>

        {isDeclarationIsNotSigned && (
          <>
            <div className={classes.wrapperNumberAddressFields}>
              <TextField
                label={t(
                  'pages/client/client_data/gdpr:declaration.nameOfThePersonWhoSignedTheDeclaration'
                )}
                value=""
              />
              <TextField
                label={t('pages/client/client_data/gdpr:declaration.inHisCapacity')}
                value=""
              />
            </div>
            <TextField label={t('shared/label:otherInformation')} value="" />
          </>
        )}
      </section>
      {/* todo:add icon */}
      <div className={classes.footerActions}>
        <Button variant="outlined" onClick={onBack}>
          {t('shared/button:back')}
        </Button>
        <Button onClick={handleSaveAndContinue}> {t('shared/button:saveAndContinue')}</Button>
      </div>
    </div>
  );
};

export default DeclarationStep;
