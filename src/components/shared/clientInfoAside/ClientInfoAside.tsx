import { Card, Typography } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import type { RootState } from '@/store';
import { useSelector } from 'react-redux';
import FlipCard from '../flipCard/FlipCard';

const ClientInfoCard = () => {
  const { t } = useI18nNamespaces(['pages/client/client_info_aside']);
  const { scanData, clientNumber, clientType, contactData } = useSelector(
    (state: RootState) => state.onboarding.idDocument
  );

  return (
    <div className="relative h-full w-1/4">
      <Typography variant="body2" className="absolute top-9">
        {t('pages/client/client_info_aside:clientInfo')}
      </Typography>

      <section className="h-full pt-[60px]">
        <Card className="h-full">
          <FlipCard mini />

          <section className="mt-3 flex flex-col gap-2">
            {scanData.nameLatin && (
              <>
                <Typography variant="body2">
                  {t('pages/client/client_info_aside:clientName')}
                </Typography>
                <Typography variant="body1">{scanData.nameLatin}</Typography>
              </>
            )}

            {clientNumber && (
              <>
                <Typography variant="body2">
                  {t('pages/client/client_info_aside:clientNumber')}
                </Typography>
                <Typography variant="body1">{clientNumber}</Typography>
              </>
            )}

            {scanData.citizenship && (
              <>
                <Typography variant="body2">
                  {t('pages/client/client_info_aside:nationality')}
                </Typography>
                <Typography variant="body1">{scanData.citizenship}</Typography>
              </>
            )}

            {clientType && (
              <>
                <Typography variant="body2">
                  {t('pages/client/client_info_aside:clientType')}
                </Typography>
                <Typography variant="body1">{clientType}</Typography>
              </>
            )}

            {contactData?.phone && (
              <>
                <Typography variant="body2">
                  {t('pages/client/client_info_aside:telephone')}
                </Typography>
                <Typography variant="body1">{contactData.phone}</Typography>
              </>
            )}

            {contactData?.email && (
              <>
                <Typography variant="body2">{t('pages/client/client_info_aside:email')}</Typography>
                <Typography variant="body1">{contactData.email}</Typography>
              </>
            )}
          </section>
        </Card>
      </section>
    </div>
  );
};

export default ClientInfoCard;
