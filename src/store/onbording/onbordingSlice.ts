import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import deepmerge from 'deepmerge';

import { OnboardingStep, ResponseStatus } from '@/common/constants';
import { IdDocumentScanType } from '@/types';
import { addClient, fetchOnbordingData } from './onbordingApi';

// --- Initial Scan Data ---
const initialScanData: IdDocumentScanType = {
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
  clientData: {
    phoneNumber: '',
    email: '',
  },
};

// --- Types ---
export interface IdDocumentState {
  isDbScanAvailable: boolean;
  isGoToContactDataModalVisible: boolean;
  isCheckAgainModalVisible: boolean;
  scanData: IdDocumentScanType;
  dbScan: IdDocumentScanType;
}

export interface OnboardingDataState {
  isStartService: boolean;
}

export interface OnboardingState {
  idDocument: IdDocumentState;
  onbordingData: OnboardingDataState;
  status: ResponseStatus;
}

// --- Initial State ---
const initialState = {
  isClientIdentification: false,
  idDocument: {
    isDbScanAvailable: false,
    isGoToContactDataModalVisible: false,
    isCheckAgainModalVisible: false,
    scanData: initialScanData,
    dbScan: initialScanData,
  },
  onbordingData: {
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
    setClientIdentification(state, action: PayloadAction<boolean>) {
      state.isClientIdentification = action.payload;
    },
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
    addOnbordingData(state, action: PayloadAction<OnboardingStep>) {
      if (action.payload === OnboardingStep.StartService) {
        state.onbordingData.isStartService = true;
      }
    },
    setContactData(state, action) {
      const { phoneNumber, email } = action.payload;

      state.clientData.phoneNumber = phoneNumber;
      state.clientData.email = email;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addClient.pending, state => {
        state.status = ResponseStatus.PENDING;
      })
      .addCase(addClient.fulfilled, (state, action) => {
        state.status = ResponseStatus.FULFILLED;
        // Optionally handle payload
      })
      .addCase(addClient.rejected, (state, action) => {
        const { status } = action.payload as { status: ResponseStatus };
        state.status = status;
      })
      .addCase(fetchOnbordingData.pending, state => {
        state.status = ResponseStatus.PENDING;
      })
      .addCase(fetchOnbordingData.fulfilled, (state, action) => {
        state.status = ResponseStatus.FULFILLED;
        // Optionally handle payload
      })
      .addCase(fetchOnbordingData.rejected, (state, action) => {
        const { status } = action.payload as { status: ResponseStatus };
        state.status = status;
      });
  },
});

// --- Exports ---
export const {
  setClientIdentification,
  setDbScanAvailable,
  setGoToContactModalVisible,
  setCheckAgainModalVisible,
  updateScanDataField,
  addOnbordingData,
  setContactData,
} = onboardingSlice.actions;

export const onboardingReducer = onboardingSlice.reducer;
export default onboardingSlice;
