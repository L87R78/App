import { Button, Checkbox, Typography } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { classes } from './styles';

const GdprSurveyPage: React.FC<{ onBack: () => void; onNext: () => void }> = ({
  onBack,
  onNext,
}) => {
  const { t } = useI18nNamespaces([
    'pages/client/client_data/gdpr',
    'shared/button',
    'shared/label',
  ]);

  const saveAndContinue = () => {
    // Example state update (adapt this as needed)
    // gdprState.gdprSteps[2].filled = true;
    onNext();
  };

  return (
    <div className={classes.container}>
      <section className={classes.scrollableSection}>
        <div className={classes.sectionEndAligned}>
          <Typography className={classes.heading}>
            {t('pages/client/client_data/gdpr:surveyPage.heading0')}
          </Typography>
        </div>

        <div className={classes.sectionCentered}>
          <Typography variant="h6" className={classes.heading}>
            {t('pages/client/client_data/gdpr:surveyPage.heading1')}
          </Typography>
        </div>
        <div className={classes.sectionCentered}>
          <Typography variant="body1" className={classes.heading}>
            {t('pages/client/client_data/gdpr:surveyPage.heading2')}
          </Typography>
        </div>

        <div className={classes.sectionStartAligned}>
          <Typography variant="h6" className={classes.heading}>
            {t('pages/client/client_data/gdpr:surveyPage.jobSection.heading')}
          </Typography>
        </div>

        <div className={classes.checkboxGroup}>
          <div className={classes.grid3Cols}>
            <Checkbox label={t('pages/client/client_data/gdpr:surveyPage.jobSection.option1')} />
            <Checkbox label={t('pages/client/client_data/gdpr:surveyPage.jobSection.option2')} />
            <Checkbox label={t('pages/client/client_data/gdpr:surveyPage.jobSection.option3')} />
          </div>
          <div className={classes.grid3Cols}>
            <Checkbox label={t('pages/client/client_data/gdpr:surveyPage.jobSection.option4')} />
            <Checkbox label={t('pages/client/client_data/gdpr:surveyPage.jobSection.option5')} />
            <Checkbox label={t('pages/client/client_data/gdpr:surveyPage.jobSection.option6')} />
          </div>
        </div>

        <div className={classes.sectionStartAligned}>
          <Typography variant="h6" className={classes.heading}>
            {t('pages/client/client_data/gdpr:surveyPage.financesSection.heading')}
          </Typography>
        </div>

        <div className={classes.checkboxGroup}>
          <div className={classes.grid3Cols}>
            <Checkbox
              label={t('pages/client/client_data/gdpr:surveyPage.financesSection.option1')}
            />
            <Checkbox
              label={t('pages/client/client_data/gdpr:surveyPage.financesSection.option2')}
            />
            <Checkbox
              label={t('pages/client/client_data/gdpr:surveyPage.financesSection.option3')}
            />
          </div>
          <div className={classes.grid3Cols}>
            <Checkbox
              label={t('pages/client/client_data/gdpr:surveyPage.financesSection.option4')}
            />
            <Checkbox
              label={t('pages/client/client_data/gdpr:surveyPage.financesSection.option5')}
            />
            <Checkbox
              label={t('pages/client/client_data/gdpr:surveyPage.financesSection.option6')}
            />
          </div>
          <div className={classes.grid3Cols}>
            <Checkbox
              label={t('pages/client/client_data/gdpr:surveyPage.financesSection.option7')}
            />
            <Checkbox
              label={t('pages/client/client_data/gdpr:surveyPage.financesSection.option8')}
            />
            <div />
          </div>
        </div>

        <div className={classes.sectionStartAligned}>
          <Typography variant="h6" className={classes.heading}>
            {t('pages/client/client_data/gdpr:surveyPage.goalOfAfiliationSection.heading')}
          </Typography>
        </div>

        <div className={classes.checkboxGroup}>
          <div className={classes.grid3Cols}>
            <Checkbox
              label={t('pages/client/client_data/gdpr:surveyPage.goalOfAfiliationSection.option1')}
            />
            <Checkbox
              label={t('pages/client/client_data/gdpr:surveyPage.goalOfAfiliationSection.option2')}
            />
            <div />
          </div>
          <div className={classes.grid3Cols}>
            <Checkbox
              label={t('pages/client/client_data/gdpr:surveyPage.goalOfAfiliationSection.option3')}
            />
            <Checkbox
              label={t('pages/client/client_data/gdpr:surveyPage.goalOfAfiliationSection.option4')}
            />
            <div />
          </div>
          <div className={classes.grid3Cols}>
            <Checkbox
              label={t('pages/client/client_data/gdpr:surveyPage.goalOfAfiliationSection.option5')}
            />
            <div />
          </div>
        </div>

        <hr className={classes.divider} />

        <div className={classes.sectionStartAligned}>
          <Typography variant="h6" className={classes.heading}>
            {t('pages/client/client_data/gdpr:surveyPage.documentSection.heading')}
          </Typography>
        </div>

        <div className={classes.checkboxGroup}>
          <div className={classes.grid2Cols}>
            <Checkbox
              label={t('pages/client/client_data/gdpr:surveyPage.documentSection.option1')}
            />
            <Checkbox
              label={t('pages/client/client_data/gdpr:surveyPage.documentSection.option2')}
            />
          </div>
          <div className={classes.grid2Cols}>
            <Checkbox
              label={t('pages/client/client_data/gdpr:surveyPage.documentSection.option3')}
            />
            <Checkbox
              label={t('pages/client/client_data/gdpr:surveyPage.documentSection.option4')}
            />
          </div>
        </div>

        <div className={classes.sectionStartAligned}>
          <Typography variant="h6" className={classes.heading}>
            {t('pages/client/client_data/gdpr:surveyPage.methodOfFilling.heading')}
          </Typography>
        </div>

        <div className={classes.grid3Cols}>
          <Checkbox label={t('pages/client/client_data/gdpr:surveyPage.methodOfFilling.option1')} />
          <Checkbox label={t('pages/client/client_data/gdpr:surveyPage.methodOfFilling.option2')} />
          <Checkbox label={t('pages/client/client_data/gdpr:surveyPage.methodOfFilling.option3')} />
        </div>
      </section>

      {/* todo:add icon */}
      <div className={classes.footerActions}>
        <Button variant="outlined" onClick={onBack}>
          {t('shared/button:back')}
        </Button>
        <Button onClick={saveAndContinue}>{t('shared/button:saveAndContinue')}</Button>
      </div>
    </div>
  );
};

export default GdprSurveyPage;
