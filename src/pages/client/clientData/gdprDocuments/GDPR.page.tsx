import { Typography } from '@/components/ui';
import { useMemo, useState } from 'react';
import DeclarationStep from './DeclarationStep';
import GdprStep from './GdprStep';
import PepsStep from './PepsStep';
import SurveyStep from './SurveyStep';

const GdprPage: React.FC = () => {
  const [gdprStep, setGdprStep] = useState(0);

  const handleGdprBack = () => {
    setGdprStep(prev => (prev > 0 ? prev - 1 : prev));
  };

  const handleGdprNext = () => {
    setGdprStep(prev => (prev < 4 ? prev + 1 : 0));
  };

  const gdprContent = useMemo(() => {
    switch (gdprStep) {
      case 0:
        return <GdprStep onBack={handleGdprBack} onNext={handleGdprNext} />;
      case 1:
        return <DeclarationStep onBack={handleGdprBack} onNext={handleGdprNext} />;
      case 2:
        return <SurveyStep onBack={handleGdprBack} onNext={handleGdprNext} />;
      case 3:
        return <PepsStep onBack={handleGdprBack} onNext={handleGdprNext} />;
      default:
        return <Typography variant="body1">Unknown step: {gdprStep}</Typography>;
    }
  }, [gdprStep]);

  return gdprContent;
};

export default GdprPage;
