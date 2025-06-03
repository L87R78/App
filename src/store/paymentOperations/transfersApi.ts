import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { ResponseStatus } from '@/common/constants';
import {
  resetModals,
  setLoadingModalVisibility,
  setSuccessModalVisibility,
} from '../common/commonSlice';
import { setSliceError } from '../error/errorSlice';

const signAndTransfer = createAsyncThunk(
  'paymentOperations',
  async (
    _: any, // TODO: Add request data type
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(setLoadingModalVisibility(true));

      // const result = await axios.post(url, data);
      await new Promise(resolve => setTimeout(resolve, 2000));
      dispatch(setLoadingModalVisibility(false));
      dispatch(setSuccessModalVisibility(true));

      return { success: true, signedAt: new Date().toISOString() };
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

export { signAndTransfer };
