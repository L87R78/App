export type IdDocumentScanType = {
  documentType: string;
  documentNumber: string;
  authority: string;
  dateOfIssue: string;
  dateOfExpiry: string;
  dateOfBirth: string;
  placeOfBirth: string;
  permanentAddress: ClientAddressType;
  communicationAddress: ClientAddressType;
  nameCyrilic: string;
  nameLatin: string;
  ucn: string;
  countryOfIssue: string;
  gender: string;
  citizenship: string;
  postalCode: string;
  residence: string;
  clientData: {
    phoneNumber: string;
    email: string;
  };
};
export type ClientAddressType = {
  city: string;
  neighbourhood: string;
  street: string;
  streetNumber: string;
  postalCode: string;
  floor?: string;
  apartment?: string;
};
export const AddressTypeEnum = {
  CommunicationAddress: 'communicationAddress',
  PermanentAddress: 'permanentAddress',
} as const;

export type AddressTypeEnum = (typeof AddressTypeEnum)[keyof typeof AddressTypeEnum];

export const AddressPropsEnum = {
  City: 'city',
  Neighbourhood: 'neighbourhood',
  Street: 'street',
  StreetNumber: 'streetNumber',
  PostalCode: 'postalCode',
  Floor: 'floor',
  Apartment: 'apartment',
} as const;

export type AddressPropsEnum = (typeof AddressPropsEnum)[keyof typeof AddressPropsEnum];

export const IdDocumentsPropsEnum = {
  CommunicationAddress: 'communicationAddress',
  PermanentAddress: 'permanentAddress',
  DocumentNumber: 'documentNumber',
  DocumentType: 'documentType',
  Authority: 'authority',
  DateOfIssue: 'dateOfIssue',
  DateOfExpiry: 'dateOfExpiry',
  DateOfBirth: 'dateOfBirth',
  PlaceOfBirth: 'placeOfBirth',
  NameCyrilic: 'nameCyrilic',
  NameLatin: 'nameLatin',
  UCN: 'ucn',
  CountryOfIssue: 'countryOfIssue',
  Gender: 'gender',
  Citizenship: 'citizenship',
  PostalCode: 'postalCode',
  Residence: 'residence',
} as const;

export type IdDocumentsPropsEnum = (typeof IdDocumentsPropsEnum)[keyof typeof IdDocumentsPropsEnum];

export type contactDataType = {
  phoneNumber: string;
  email: string;
};
