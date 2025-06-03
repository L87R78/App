import { FlipCard, LoadingModal } from '@/components/shared';
import {
  Alert,
  Button,
  Card,
  Checkbox,
  DatePicker,
  Select,
  TextField,
  Typography,
} from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import dayjs from 'dayjs';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setLoadingModalVisibility } from '@/store/common/commonSlice';
import type { RootState } from '@/store/index';
import { updateScanDataField } from '@/store/onboarding/onboardingSlice';
import { type IdDocumentScanType } from '@/types';
import React from 'react';
import {
  citizenship_data,
  country_of_issue_data,
  gender_data,
  place_of_birth_data,
  residence_data,
  type_document_data,
} from '../constants';
import AddressDataSection from './AddressDataSection';
import { classes } from './styles';

const IdDocument = ({
  isDbScan = false,
  setGoToContactModalVisible,
}: {
  isDbScan?: boolean;
  setGoToContactModalVisible?: (status: boolean) => void;
}) => {
  const { t } = useI18nNamespaces([
    'pages/client/client_data/id_document',
    'shared/common',
    'shared/label',
    'shared/button',
  ]);

  const dispatch = useDispatch();
  const isDbScanAvailable = useSelector(
    (state: RootState) => state.onboarding.idDocument.isDbScanAvailable
  );

  const [doAddressesMatch, setDoAddressesMatch] = useState(true);
  const scanData = useSelector((state: RootState) =>
    isDbScan ? state.onboarding.idDocument.dbScan : state.onboarding.idDocument.scanData
  );

  const initialScanData = useMemo(() => scanData, [scanData]);

  const [localScanData, setLocalScanData] = useState<IdDocumentScanType>(initialScanData);

  const handleScanAgain = () => {
    console.log('New scan button clicked');
  };

  const handleGoToContactData = () => {
    if (!isDbScan && setGoToContactModalVisible) {
      dispatch(setLoadingModalVisibility(true));
      dispatch(updateScanDataField(localScanData));
      setTimeout(() => {
        dispatch(setLoadingModalVisibility(false));
        setGoToContactModalVisible(true);
      }, 1000);
    }
  };

  return (
    <div className={classes.currentScanWrapper}>
      <section className="flex flex-col gap-5">
        <Typography variant="h6">
          {isDbScan
            ? t('pages/client/client_data/id_document:dbData')
            : t('pages/client/client_data/id_document:scanData')}
        </Typography>

        <div
          className={`flex flex-col gap-6 pb-8 ${!isDbScanAvailable ? 'lg:grid lg:grid-cols-2 lg:gap-4' : ''}`}
        >
          <Card>
            <FlipCard />
          </Card>

          {!isDbScan && !isDbScanAvailable && (
            <Card>
              <div className={classes.createInfContainer}>
                <Alert severity="warning" className={classes.dbDataWarning}>
                  {t('pages/client/client_data/id_document:noClientData')}
                </Alert>

                <Typography variant="h6" className="text-center">
                  {t('pages/client/client_data/id_document:doYouWantToCreateClient')}
                </Typography>

                <div className="flex justify-between gap-4">
                  <Button variant="outlined">{t('shared/common:no')}</Button>
                  <Button onClick={handleGoToContactData}>{t('shared/common:yes')}</Button>
                </div>
              </div>
            </Card>
          )}
        </div>

        <main>
          {/* !!!! TODO: Replace div.gridContainer with responsive GRid from MUI  
          https://mui.com/material-ui/react-grid/*/}

          <Card>
            <div className={!isDbScanAvailable ? classes.gridContainer : classes.flexContainer}>
              {/* LEFT SECTION */}
              <div className="flex flex-col gap-4">
                <Select
                  id="document-type"
                  label={t('shared/label:documentType')}
                  disabled
                  options={type_document_data}
                  value={localScanData.documentType}
                  onChange={e =>
                    setLocalScanData(prev => ({
                      ...prev,
                      documentType: e.target.value,
                    }))
                  }
                />

                <div className={classes.gridContainer}>
                  <TextField
                    label={t('shared/label:documentNumber')}
                    value={localScanData.documentNumber}
                    disabled={isDbScan}
                    onChange={e =>
                      setLocalScanData(prev => ({
                        ...prev,
                        documentNumber: e.target.value,
                      }))
                    }
                  />
                  <TextField
                    label={t('shared/label:authority')}
                    value={localScanData.authority}
                    disabled={isDbScan}
                    onChange={e =>
                      setLocalScanData(prev => ({
                        ...prev,
                        authority: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className={classes.gridContainer}>
                  <DatePicker
                    label={t('shared/label:dateOfIssue')}
                    value={localScanData.dateOfIssue}
                    disablePast={false}
                    onChange={date =>
                      setLocalScanData(prev => {
                        const newValue = {
                          ...prev,
                          dateOfIssue: date ? dayjs(date).format('DD/MM/YYYY') : '',
                        };
                        return newValue;
                      })
                    }
                  />
                  <DatePicker
                    label={t('shared/label:dateOfExpiry')}
                    value={localScanData.dateOfExpiry}
                    onChange={date =>
                      setLocalScanData(prev => ({
                        ...prev,
                        dateOfExpiry: date ? dayjs(date).format('DD/MM/YYYY') : '',
                      }))
                    }
                  />
                </div>
                <div className={classes.gridContainer}>
                  <DatePicker
                    label={t('shared/label:dateOfBirth')}
                    disablePast={false}
                    value={localScanData.dateOfBirth}
                    onChange={date =>
                      setLocalScanData(prev => ({
                        ...prev,
                        dateOfBirth: date ? dayjs(date).format('DD/MM/YYYY') : '',
                      }))
                    }
                  />
                  <Select
                    label={t('shared/label:placeOfBirth')}
                    disabled={isDbScan}
                    options={place_of_birth_data}
                    value={localScanData.placeOfBirth || ''}
                    onChange={e => {
                      setLocalScanData(prev => ({
                        ...prev,
                        placeOfBirth: e.target.value,
                      }));
                      console.log(localScanData);
                    }}
                  />
                </div>

                <AddressDataSection
                  isDbScan={isDbScan}
                  currentData={localScanData.permanentAddress}
                  onChange={(field, value) =>
                    setLocalScanData(prev => ({
                      ...prev,
                      permanentAddress: {
                        ...prev.permanentAddress,
                        [field]: value,
                      },
                    }))
                  }
                />

                {!isDbScan && (
                  <div className="mb-4">
                    <Checkbox
                      label={t('shared/common:permanentAddressMatches')}
                      checked={doAddressesMatch}
                      onChange={e => setDoAddressesMatch(e.target.checked)}
                    />
                  </div>
                )}

                {!doAddressesMatch && !isDbScan && (
                  <>
                    <h3>{t('pages/client/client_data/id_document:communicationAddress')}</h3>
                    <AddressDataSection
                      isDbScan={isDbScan}
                      currentData={localScanData.communicationAddress}
                      onChange={(field, value) =>
                        setLocalScanData(prev => ({
                          ...prev,
                          permanentAddress: {
                            ...prev.permanentAddress,
                            [field]: value,
                          },
                        }))
                      }
                    />
                  </>
                )}
              </div>

              {/* RIGHT SECTION */}
              <div className="flex flex-col gap-4">
                <div className={classes.gridContainer}>
                  <TextField
                    label={t('shared/label:namesInCyrillic')}
                    value={localScanData.nameCyrilic}
                    disabled={isDbScan}
                    onChange={e =>
                      setLocalScanData(prev => ({
                        ...prev,
                        nameCyrilic: e.target.value,
                      }))
                    }
                  />
                  <TextField
                    label={t('shared/label:namesInLatin')}
                    value={localScanData.nameLatin}
                    disabled={isDbScan}
                    onChange={e =>
                      setLocalScanData(prev => ({
                        ...prev,
                        nameLatin: e.target.value,
                      }))
                    }
                  />
                  <TextField label={t('shared/label:ucn')} value={localScanData.ucn} disabled />
                  <Select
                    label={t('shared/label:countryOfIssue')}
                    disabled={isDbScan}
                    options={country_of_issue_data}
                    value={localScanData.countryOfIssue || ''}
                    onChange={e => {
                      setLocalScanData(prev => ({
                        ...prev,
                        countryOfIssue: e.target.value,
                      }));
                    }}
                  />

                  <Select
                    label={t('shared/label:citizenship')}
                    disabled={isDbScan}
                    options={citizenship_data}
                    value={localScanData.citizenship || ''}
                    onChange={e => {
                      setLocalScanData(prev => ({
                        ...prev,
                        citizenship: e.target.value,
                      }));
                    }}
                  />
                  <Select
                    label={t('shared/label:gender')}
                    disabled={isDbScan}
                    options={gender_data}
                    value={localScanData.gender || ''}
                    onChange={e => {
                      setLocalScanData(prev => ({
                        ...prev,
                        gender: e.target.value,
                      }));
                    }}
                  />

                  <TextField
                    label={t('shared/label:postalCode')}
                    value={localScanData.postalCode}
                  />

                  <Select
                    label={t('shared/label:residence')}
                    disabled={isDbScan}
                    options={residence_data}
                    value={localScanData.residence || ''}
                    onChange={e => {
                      setLocalScanData(prev => ({
                        ...prev,
                        residence: e.target.value,
                      }));
                    }}
                  />
                </div>
              </div>
            </div>

            {!isDbScan && (
              <footer className="flex justify-end pt-4">
                <Button variant="outlined" onClick={handleScanAgain}>
                  {t('shared/button:scanAgain')}
                </Button>
              </footer>
            )}
          </Card>
        </main>
      </section>
      <LoadingModal />
    </div>
  );
};

export default React.memo(IdDocument);
