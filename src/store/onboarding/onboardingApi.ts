import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { ResponseStatus } from '@/common/constants';
import {
  resetModals,
  setLoadingModalVisibility,
  setSuccessModalVisibility,
} from '../common/commonSlice';
import { setSliceError } from '../error/errorSlice';
import { initialScanData } from './onboardingSlice';

const addClient = createAsyncThunk(
  'onboarding/addClient',
  async (
    _, // TODO: Add request data type
    { dispatch, rejectWithValue }
  ) => {
    // const url = ''; // TODO: add url

    try {
      // const result = await axios.post(url, data);

      return { clientNumber: '893283912321' };
    } catch (error: unknown) {
      dispatch(resetModals());

      if (error instanceof AxiosError && error.response) {
        dispatch(
          setSliceError({
            httpStatusCode: error.response.status,
            httpStatus: ResponseStatus.REJECTED,
          })
        );

        return rejectWithValue({ status: ResponseStatus.REJECTED });
      }
    }
  }
);

const fetchOnboardingData = createAsyncThunk(
  'onboarding/fetchOnboardingData',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoadingModalVisibility(false));
      const result = {
        scanData: initialScanData,
        clientNumber: '12345678',
        clientType: 'Mass client',
        contactData: {
          email: '',
          phone: '',
        },
      };

      return result;
    } catch (error: unknown) {
      dispatch(resetModals());

      if (error instanceof AxiosError && error.response) {
        dispatch(
          setSliceError({
            httpStatusCode: error.response.status,
            httpStatus: ResponseStatus.REJECTED,
          })
        );

        return rejectWithValue({ status: ResponseStatus.REJECTED });
      }
    }
  }
);

const signGdprDocuments = createAsyncThunk(
  'onboarding/signGdprDocuments',
  async (
    _, // optionally accept data here, e.g. { clientId: string }
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(setLoadingModalVisibility(true));

      // Simulate delay or call your API here:
      await new Promise(resolve => setTimeout(resolve, 2000));
      // const response = await axios.post('/api/sign-docs', payload);
      // return response.data;

      dispatch(setLoadingModalVisibility(false));
      dispatch(setSuccessModalVisibility(true));

      return { success: true, signedAt: new Date().toISOString() };
    } catch (error: unknown) {
      dispatch(setLoadingModalVisibility(false));
      dispatch(setLoadingModalVisibility(false));

      if (error instanceof AxiosError && error.response) {
        dispatch(resetModals());

        dispatch(
          setSliceError({
            httpStatusCode: error.response.status,
            httpStatus: ResponseStatus.REJECTED,
          })
        );

        return rejectWithValue({ status: ResponseStatus.REJECTED });
      }

      return rejectWithValue({ status: ResponseStatus.REJECTED });
    }
  }
);

export { addClient, fetchOnboardingData, signGdprDocuments };
