import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { ResponseStatus } from '@/common/constants';
import { setLoadingModalVisibility, setSuccessModalVisibility } from '../common/commonSlice';
import { setSliceError } from '../error/errorSlice';

const signAndTransfer = createAsyncThunk(
  'paymentOperations',
  async (
    data: any, // TODO: Add request data type
    { dispatch, rejectWithValue }
  ) => {
    const url = ''; // TODO: add url
    try {
      dispatch(setLoadingModalVisibility(true));

      // const result = await axios.post(url, data);
      await new Promise(resolve => setTimeout(resolve, 2000));
      dispatch(setLoadingModalVisibility(false));
      dispatch(setSuccessModalVisibility(true));

      return { success: true, signedAt: new Date().toISOString() };
    } catch (error: unknown) {
      dispatch(setLoadingModalVisibility(false));
      dispatch(setSuccessModalVisibility(false));

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
