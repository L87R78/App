import { LoadingModal, SuccessModal } from '@/components/shared';
import { Alert, Box, Button, Card, CardContent, Checkbox, Grid, Typography } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { route } from '@/router';
import { RootState } from '@/store';
import { useAppDispatch } from '@/store/hooks';
import { signGdprDocuments } from '@/store/onboarding/onboardingApi';
import { areAllFilledAndSigned, toggleSelectedQueue } from '@/store/onboarding/onboardingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { classes } from './styles';

const GdprAside = ({
  clientName,
  clientNumber,
}: {
  clientName: string;
  clientNumber: string | number;
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dispatchRequest = useAppDispatch();

  const { t } = useI18nNamespaces([
    'pages/client/client_data/gdpr',
    'pages/client/client_info_aside',
  ]);

  const gdprState = useSelector((state: RootState) => state.onboarding.gdpr);
  const selectedQueueLength = gdprState.selectedQueue.length === 0;

  const signDocuments = () => {
    dispatchRequest(signGdprDocuments());
  };
  return (
    <div className=" h-full w-1/4">
      <section className="h-full pt-[60px]">
        <Card className="h-full" noShadow>
          <CardContent>
            <Box className={classes.clientInfoWrapper}>
              <Typography variant="body2">
                {t('pages/client/client_info_aside:clientName')}
              </Typography>
              <Typography variant="subtitle2">{clientName}</Typography>
              <Typography variant="body2">
                {t('pages/client/client_info_aside:clientNumber')}
              </Typography>
              <Typography variant="subtitle2">{clientNumber}</Typography>
            </Box>

            {!areAllFilledAndSigned(gdprState) && (
              <Alert severity="warning">
                <p>{t('pages/client/client_data/gdpr:docsWarning')}</p>
              </Alert>
            )}

            <div className="mt-2 flex flex-col gap-1">
              {gdprState.gdprSteps.map(item => (
                <div key={item.id} className="flex flex-col gap-3 p-2">
                  <Checkbox
                    label={t(`pages/client/client_data/gdpr:${item.label}`)}
                    onChange={() => dispatch(toggleSelectedQueue(item.id))}
                    checked={gdprState.selectedQueue.includes(item.id)}
                  />

                  <Grid container spacing={2}>
                    <div
                      className={`${classes.pill} ${!item.filled ? classes.pillNonValidated : classes.pillValidated}`}
                    >
                      {t('pages/client/client_data/gdpr:filled')}
                      {/* todo: add icon */}
                    </div>
                    <div
                      className={`${classes.pill} ${!item.signed ? classes.pillNonValidated : classes.pillValidated}`}
                    >
                      {t('pages/client/client_data/gdpr:signed')}
                      {/* todo: add icon */}
                    </div>
                  </Grid>
                </div>
              ))}
            </div>

            <hr className="my-4 border-t border-gray-300" />

            <div className="flex flex-col gap-2">
              <section>
                <div className="flex items-center justify-between font-bold">
                  <Typography variant="subtitle2">
                    {t('pages/client/client_data/gdpr:eSign')}
                  </Typography>
                  {/* todo: move the icon logic into the IconButton */}

                  {/* <div
                    className={`${classes.iconCircle} ${selectedQueueLength ? classes.disabledIconCircle : ''}`}
                    onClick={!selectedQueueLength ? showSignatureModal : undefined}
                  >                  </div> */}

                  {/* todo: add icon */}
                  <Button
                    className={classes.iconButton}
                    size="small"
                    onClick={() => signDocuments()}
                  >
                    t
                  </Button>
                </div>
                <span className={classes.docCountText}>
                  {!selectedQueueLength &&
                    `${gdprState.selectedQueue.length} ${t('pages/client/client_data/gdpr:documents')}`}
                </span>
              </section>

              <section>
                <div className="flex items-center justify-between font-bold">
                  <Typography variant="subtitle2">
                    {t('pages/client/client_data/gdpr:print')}
                  </Typography>
                  {/* todo: move the icon logic into the IconButton */}
                  {/* <div
                    className={`${classes.iconCircle} ${selectedQueueLength ? classes.disabledIconCircle : ''}`}
                    onClick={
                      !selectedQueueLength
                        ? () => {
                            console.log('download');
                          }
                        : undefined
                    }
                  >                  </div> */}

                  {/* todo: add icon */}
                  <Button className={classes.iconButton} size="small">
                    t
                  </Button>
                </div>
                <span className={classes.docCountText}>
                  {!selectedQueueLength &&
                    `${gdprState.selectedQueue.length} ${t('pages/client/client_data/gdpr:documents')}`}
                </span>
              </section>
            </div>
          </CardContent>
        </Card>
      </section>

      <LoadingModal text={t('pages/client/client_data/gdpr:docsAreBeingSigned')} />

      <SuccessModal
        onContinue={() => {
          navigate(route.paymentOperationsTranfers);
        }}
        message={t('pages/client/client_data/gdpr:docsSignedSuccessfuly')}
        buttonMessage={t('shared/button:continue')}
      />
    </div>
  );
};

export default GdprAside;
