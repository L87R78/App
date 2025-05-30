import DSKLogo from '@/assets/icons/iconDSK.svg';
import { Dialog, Typography } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { RootState } from '@/store';
import React from 'react';
import { useSelector } from 'react-redux';

const LoadingModal: React.FC<{ text?: string }> = ({ text }: { text?: string }) => {
  const { t } = useI18nNamespaces(['shared/common']);

  const isVisible = useSelector((state: RootState) => state.common.isLoadingModalVisible);
  return (
    <Dialog open={isVisible}>
      <div className="flex flex-col items-center gap-4 w-[300px] p-6">
        <Typography variant="h6" className="text-(--clr-primary)">
          {t('shared/common:pleaseWait')}...
        </Typography>
        <div className="relative h-32 w-32">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-gray-200 border-t-transparent"></div>
          <div className="flex h-full w-full items-center justify-center">
            <img src={DSKLogo} alt="DSK logo" width="80" height="70" loading="lazy" />
          </div>
        </div>
        <Typography variant="body1">{text}</Typography>
      </div>
    </Dialog>
  );
};

export default LoadingModal;
