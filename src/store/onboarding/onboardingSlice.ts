import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import deepmerge from 'deepmerge';

import { OnboardingStep, ResponseStatus } from '@/common/constants';
import { IdDocumentScanType } from '@/types';
import { addClient, fetchOnboardingData, signGdprDocuments } from './onboardingApi';

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
// Id Document
export interface IdDocumentState {
  isDbScanAvailable: boolean;
  isGoToContactDataModalVisible: boolean;
  isCheckAgainModalVisible: boolean;
  scanData: IdDocumentScanType;
  dbScan: IdDocumentScanType;
  clientNumber: number | string;
  clientType: string;
}

//GDPR
export interface GdprStep {
  label: string;
  filled: boolean;
  signed: boolean;
  id: string;
}

export interface GdprState {
  gdprSteps: GdprStep[];
  selectedQueue: string[];
  areDocumentsSignedSuccessfully: boolean;
}

//Onboarding
export interface OnboardingDataState {
  isStartService: boolean;
}

export interface OnboardingState {
  idDocument: IdDocumentState;
  onboardingData: OnboardingDataState;
  status: ResponseStatus;
  gdpr: GdprState;
}

// --- Initial State ---
const initialState = {
  idDocument: {
    isDbScanAvailable: false,
    isGoToContactDataModalVisible: false,
    isCheckAgainModalVisible: false,
    scanData: {} as IdDocumentScanType,
    dbScan: {} as IdDocumentScanType,
    clientNumber: '',
    clientType: 'Mass client',
  },
  gdpr: {
    gdprSteps: [
      { label: 'gdpr', filled: false, signed: false, id: 'gdpr' },
      { label: 'DOPKdeclaration', filled: false, signed: false, id: 'dopk' },
      { label: 'survey', filled: false, signed: false, id: 'survey' },
      { label: 'peps', filled: false, signed: false, id: 'peps' },
    ],
    selectedQueue: [] as string[],
    areDocumentsSignedSuccessfully: false,
  },
  onboardingData: {
    isStartService: false,
  },
  status: ResponseStatus.IDLE,
  clientData: {
    phoneNumber: '',
    email: '',
  },
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
    setContactData(state, action) {
      const { phoneNumber, email } = action.payload;

      state.clientData.phoneNumber = phoneNumber;
      state.clientData.email = email;
    },
    toggleSelectedQueue(state, action: PayloadAction<string>) {
      const id = action.payload;
      const index = state.gdpr.selectedQueue.indexOf(id);
      if (index === -1) {
        state.gdpr.selectedQueue.push(id);
      } else {
        state.gdpr.selectedQueue.splice(index, 1);
      }
    },
    pushAllToQueue(state) {
      state.gdpr.gdprSteps.forEach(step => {
        if (!state.gdpr.selectedQueue.includes(step.id)) {
          state.gdpr.selectedQueue.push(step.id);
        }
      });
    },
    signAllDocuments(state) {
      state.gdpr.gdprSteps.forEach(step => {
        step.signed = true;
      });
    },
    resetGDPRState(state) {
      state.gdpr.gdprSteps = [
        { label: 'gdpr', filled: false, signed: false, id: 'gdpr' },
        { label: 'DOPKdeclaration', filled: false, signed: false, id: 'dopk' },
        { label: 'survey', filled: false, signed: false, id: 'survey' },
        { label: 'peps', filled: false, signed: false, id: 'peps' },
      ];
      state.gdpr.selectedQueue = [];
    },
    setStepFilled(state, action: PayloadAction<{ index: number; filled: boolean }>) {
      const index = action.payload.index;
      console.log('index: ', index);
      if (index >= 0 && index < state.gdpr.gdprSteps.length) {
        const step = state.gdpr.gdprSteps[index];
        step.filled = action.payload.filled;
      }
    },
    setStepSigned(state, action: PayloadAction<{ index: number; signed: boolean }>) {
      const index = action.payload.index;
      if (index >= 0 && index < state.gdpr.gdprSteps.length) {
        const step = state.gdpr.gdprSteps[index];
        step.signed = action.payload.signed;
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
        }
      })
      .addCase(fetchOnboardingData.rejected, (state, action) => {
        const { status } = action.payload as { status: ResponseStatus };
        state.status = status;
      })
      .addCase(signGdprDocuments.rejected, (state, action) => {
        const { status } = action.payload as { status: ResponseStatus };
        state.status = status;
        state.gdpr.areDocumentsSignedSuccessfully = false;
      })
      .addCase(signGdprDocuments.pending, state => {
        state.status = ResponseStatus.PENDING;
      })
      .addCase(signGdprDocuments.fulfilled, (state, action) => {
        const payload = action.payload;
        state.status = ResponseStatus.FULFILLED;
        if (payload) {
          state.gdpr.areDocumentsSignedSuccessfully = payload.success;
          state.gdpr.gdprSteps.forEach(step => {
            step.signed = true;
          });
        }
      });
  },
});

export const areAllFilledAndSigned = (state: GdprState): boolean =>
  state.gdprSteps.every(step => step.filled && step.signed);

// --- Exports ---
export const {
  setDbScanAvailable,
  setGoToContactModalVisible,
  setCheckAgainModalVisible,
  updateScanDataField,
  addOnboardingData,
  setContactData,
  toggleSelectedQueue,
  pushAllToQueue,
  signAllDocuments,
  resetGDPRState,
  setStepFilled,
  setStepSigned,
} = onboardingSlice.actions;

export const onboardingReducer = onboardingSlice.reducer;
export default onboardingSlice;
