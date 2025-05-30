import DSKLogo from '@/assets/images/ImageDskLogo.svg';
import { Button, Checkbox, Typography } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { useState } from 'react';
import { classes } from './styles';

const GdprStep: React.FC<{ onBack: () => void; onNext: () => void }> = ({ onBack, onNext }) => {
  const { t } = useI18nNamespaces(['pages/client/client_data/gdpr', 'shared/button']);
  const [checkboxes, setCheckboxes] = useState({ c1: true, c2: true, c3: true });

  const handleChange =
    (key: keyof typeof checkboxes) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheckboxes(prev => ({ ...prev, [key]: e.target.checked }));
    };

  const handleContinue = () => onNext();

  return (
    <div className={classes.wrapper}>
      <div className={classes.logoWrapper}>
        <img src={DSKLogo} alt="DSK logo" className={classes.logoImage} width={200} />
      </div>

      <div className={`${classes.sectionCentered} mt-10`}>
        <Typography variant="h6" align="center" className={classes.heading1}>
          {t('pages/client/client_data/gdpr:gdprPage.heading1')}
        </Typography>
      </div>
      <div className={classes.sectionCentered}>
        <Typography variant="h6" align="center" className={classes.heading2}>
          {t('pages/client/client_data/gdpr:gdprPage.heading2')}
        </Typography>
      </div>

      <div className={classes.checkboxSection}>
        <section>
          <label className={classes.checkboxLabel}>
            <Checkbox checked={checkboxes.c1} onChange={handleChange('c1')} />
            <Typography> {t('pages/client/client_data/gdpr:gdprPage.checkbox1')}</Typography>
          </label>
        </section>
        <section>
          <label className={classes.checkboxLabel}>
            <Checkbox checked={checkboxes.c2} onChange={handleChange('c2')} />
            <Typography>{t('pages/client/client_data/gdpr:gdprPage.checkbox2')}</Typography>
          </label>
        </section>
        <section>
          <label className={classes.checkboxLabel}>
            <Checkbox checked={checkboxes.c3} onChange={handleChange('c3')} />
            <Typography>{t('pages/client/client_data/gdpr:gdprPage.checkbox3')}</Typography>
          </label>
        </section>
      </div>

      {/* todo:add icon */}
      <div className={classes.buttonWrapper}>
        <Button variant="outlined" onClick={onBack}>
          {t('shared/button:back')}
        </Button>
        <Button onClick={handleContinue}>{t('shared/button:saveAndContinue')}</Button>
      </div>
    </div>
  );
};

export default GdprStep;
