import { Button, Card } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import React from 'react';
import { classes } from './styles';

interface ValidationBlockProps {
  validationHeader: string;
  validationBody: string[];
  hasButtonCheckAgain?: boolean;
  isLoadingData?: boolean;
  onCheckAgain?: () => void;
}

const ValidationBlock: React.FC<ValidationBlockProps> = ({
  validationHeader,
  validationBody,
  hasButtonCheckAgain = false,
  onCheckAgain,
}) => {
  const { t } = useI18nNamespaces(['pages/client/client_data/id_document', 'shared/common']);
  return (
    <Card>
      <header className={classes.validationHeader}>
        <h3>{validationHeader}</h3>
        <h3>{t('shared/common:result')}</h3>
      </header>
      <main className={classes.validationBody}>
        <ul className={classes.validationBodyList}>
          {validationBody.map((check, i) => (
            <li key={i} className={classes.validationItem}>
              <p className={classes.validationText}>{check}</p>
              {/* TODO: Add icon */}
              {/* <CheckCircle className="text-success" /> */}
            </li>
          ))}
        </ul>
      </main>
      {hasButtonCheckAgain && (
        <footer className="flex justify-end p-2">
          <Button variant="outlined" onClick={onCheckAgain}>
            {t('pages/client/client_data/id_document:checkAgain')}
          </Button>
        </footer>
      )}
    </Card>
  );
};

export default ValidationBlock;
