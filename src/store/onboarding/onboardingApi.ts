import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { ResponseStatus } from '@/common/constants';
import { setLoadingModalVisibility } from '../common/commonSlice';
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
      dispatch(setLoadingModalVisibility(true));
      await new Promise(resolve => setTimeout(resolve, 2000));
      const result = {
        scanData: initialScanData,
        clientNumber: '12345678',
        clientType: 'Mass client',
        contactData: {
          email: '',
          phone: '',
        },
      };

      dispatch(setLoadingModalVisibility(false));
      return result;
    } catch (error: unknown) {
      dispatch(setLoadingModalVisibility(false));
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

export { addClient, fetchOnboardingData };
