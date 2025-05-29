import { createSlice } from '@reduxjs/toolkit';

import { ResponseStatus } from '../../common/constants';

const initialState: any = {
  // Add models.ErrorState type
  httpStatusCode: 0,
  httpStatus: ResponseStatus.IDLE,
};

const errorSlice = createSlice({
  name: 'errorSlice',
  initialState,
  reducers: {
    setSliceError(state, action) {
      const { httpStatusCode, httpStatus } = action.payload;

      state.httpStatusCode = httpStatusCode;
      state.httpStatus = httpStatus;
    },
    clearSliceError: state => {
      state.httpStatusCode = 0;
      state.httpStatus = ResponseStatus.IDLE;
    },
  },
});

export const { setSliceError, clearSliceError } = errorSlice.actions;

export default errorSlice.reducer;
