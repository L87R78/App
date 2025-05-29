import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { ResponseStatus } from '../../common/constants';

import { setSliceError } from '../error/errorSlice';

const addClient = createAsyncThunk(
  'onbording/addClient',
  async (
    data: any, // TODO: Add request data type
    { dispatch, rejectWithValue }
  ) => {
    const url = ''; // TODO: add url

    try {
      const result = await axios.post(url, data);

      return result.data;
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

const fetchOnbordingData = createAsyncThunk(
  'onbording/fetchOnbordingData',
  async (_, { dispatch, rejectWithValue }) => {
    const url = ''; // TODO: add url

    try {
      const result = await axios.get(url);

      return result.data;
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

export { addClient, fetchOnbordingData };
