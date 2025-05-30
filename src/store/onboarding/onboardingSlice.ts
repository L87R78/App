import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import deepmerge from 'deepmerge';

import { OnboardingStep, ResponseStatus } from '@/common/constants';
import { IdDocumentScanType } from '@/types';
import { addClient, fetchOnboardingData } from './onboardingApi';

// --- Initial Scan Data ---
export const initialScanData: IdDocumentScanType = {
  documentType: 'ID Card Specimen 2010',
  documentNumber: 'АА0000000',
  authority: 'Mol BGR',
  dateOfIssue: '17/06/2024',
  dateOfExpiry: '17/06/2034',
  dateOfBirth: '01/08/1995',
  placeOfBirth: 'Sofia',
  permanentAddress: {
    city: 'Sofia',
    neighbourhood: '',
    street: 'Kniaginia Maria Luiza',
    streetNumber: '48',
    postalCode: '1000',
    floor: '5',
    apartment: '26',
  },
  communicationAddress: {
    city: '',
    neighbourhood: '',
    street: '',
    streetNumber: '',
    postalCode: '',
    floor: '',
    apartment: '',
  },
  nameCyrilic: 'Славина Георгиева Иванова',
  nameLatin: 'Slavina Georgieva Ivanova',
  ucn: '9508010133',
  countryOfIssue: 'Bulgaria',
  gender: 'F',
  citizenship: 'Bulgarian',
  postalCode: '1000',
  residence: 'Bulgaria',
};

// --- Types ---
export interface IdDocumentState {
  isDbScanAvailable: boolean;
  isGoToContactDataModalVisible: boolean;
  isCheckAgainModalVisible: boolean;
  scanData: IdDocumentScanType;
  dbScan: IdDocumentScanType;
  clientNumber: number | string;
  clientType: string;
  contactData: {
    email: string;
    phone: string;
  };
}

export interface OnboardingDataState {
  isStartService: boolean;
}

export interface OnboardingState {
  idDocument: IdDocumentState;
  onboardingData: OnboardingDataState;
  status: ResponseStatus;
}

// --- Initial State ---
const initialState: OnboardingState = {
  idDocument: {
    isDbScanAvailable: false,
    isGoToContactDataModalVisible: false,
    isCheckAgainModalVisible: false,
    scanData: {} as IdDocumentScanType,
    dbScan: {} as IdDocumentScanType,
    clientNumber: '',
    clientType: 'Mass client',
    contactData: {
      email: '',
      phone: '',
    },
  },
  onboardingData: {
    isStartService: false,
  },
  status: ResponseStatus.IDLE,
};

// --- Slice ---
const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setDbScanAvailable(state, action: PayloadAction<boolean>) {
      state.idDocument.isDbScanAvailable = action.payload;
    },
    setGoToContactModalVisible(state, action: PayloadAction<boolean>) {
      state.idDocument.isGoToContactDataModalVisible = action.payload;
    },
    setCheckAgainModalVisible(state, action: PayloadAction<boolean>) {
      state.idDocument.isCheckAgainModalVisible = action.payload;
    },
    updateScanDataField(state, action: PayloadAction<Partial<IdDocumentScanType>>) {
      state.idDocument.scanData = deepmerge(state.idDocument.scanData, action.payload);
    },
    addOnboardingData(state, action: PayloadAction<OnboardingStep>) {
      if (action.payload === OnboardingStep.StartService) {
        state.onboardingData.isStartService = true;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addClient.pending, state => {
        state.status = ResponseStatus.PENDING;
      })
      .addCase(addClient.fulfilled, (state, action) => {
        const payload = action.payload;
        state.status = ResponseStatus.FULFILLED;

        if (payload) {
          state.idDocument.clientNumber = payload.clientNumber;
        }
      })
      .addCase(addClient.rejected, (state, action) => {
        const { status } = action.payload as { status: ResponseStatus };
        state.status = status;
      })
      .addCase(fetchOnboardingData.pending, state => {
        state.status = ResponseStatus.PENDING;
      })
      .addCase(fetchOnboardingData.fulfilled, (state, action) => {
        const payload = action.payload;
        state.status = ResponseStatus.FULFILLED;

        if (payload) {
          state.idDocument.scanData = payload.scanData;
          state.idDocument.dbScan = payload.scanData;
          state.idDocument.clientNumber = payload.clientNumber;
          state.idDocument.clientType = payload.clientType;
          state.idDocument.contactData = payload.contactData;
        }
      })
      .addCase(fetchOnboardingData.rejected, (state, action) => {
        const { status } = action.payload as { status: ResponseStatus };
        state.status = status;
      });
  },
});

// --- Exports ---
export const {
  setDbScanAvailable,
  setGoToContactModalVisible,
  setCheckAgainModalVisible,
  updateScanDataField,
  addOnboardingData,
} = onboardingSlice.actions;

export const onboardingReducer = onboardingSlice.reducer;
export default onboardingSlice;
