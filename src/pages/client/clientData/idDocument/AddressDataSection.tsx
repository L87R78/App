import { Select, TextField } from '@/components/ui';
import { useI18nNamespaces } from '@/hooks';
import { ClientAddressType } from '@/types';
import React from 'react';
import { neighbourhood_data, place_of_birth_data } from '../constants';

interface Props {
  isDbScan: boolean;
  currentData: ClientAddressType;
  onChange: (field: keyof ClientAddressType, value: string) => void;
}

const AddressDataSection: React.FC<Props> = ({ isDbScan, currentData, onChange }) => {
  const { t } = useI18nNamespaces(['shared/label']);

  return (
    <section className="container mx-auto mb-6 space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Select
          label={t('shared/label:inhabitedPlace')}
          disabled={isDbScan}
          options={place_of_birth_data}
          value={currentData.city || ''}
          onChange={e => onChange('city', e.target.value)}
        />
        <Select
          label={t('shared/label:neighbourhood')}
          disabled={isDbScan}
          options={neighbourhood_data}
          value={currentData.neighbourhood || ''}
          onChange={e => onChange('neighbourhood', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1">
        <TextField
          label={t('shared/label:street')}
          disabled={isDbScan}
          value={currentData.street || ''}
          onChange={e => onChange('street', e.target.value)}
        />
      </div>
      <div className=" grid w-full grid-cols-2 gap-4 md:grid-cols-4">
        <TextField
          label={t('shared/label:number')}
          disabled={isDbScan}
          value={currentData.streetNumber || ''}
          onChange={e => onChange('streetNumber', e.target.value)}
        />
        <TextField
          label={t('shared/label:floor')}
          disabled={isDbScan}
          value={currentData.floor || ''}
          onChange={e => onChange('floor', e.target.value)}
        />
        <TextField
          label={t('shared/label:aptNumber')}
          disabled={isDbScan}
          value={currentData.apartment || ''}
          onChange={e => onChange('apartment', e.target.value)}
        />
        <TextField
          label={t('shared/label:postalCode')}
          disabled={isDbScan}
          value={currentData.postalCode || ''}
          onChange={e => onChange('postalCode', e.target.value)}
        />
      </div>
    </section>
  );
};

export default React.memo(AddressDataSection);
