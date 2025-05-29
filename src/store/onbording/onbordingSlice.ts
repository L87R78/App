import { createSlice } from '@reduxjs/toolkit';

import { OnboardingStep, ResponseStatus } from '../../common/constants';

import { addClient, fetchOnbordingData } from './onbordingApi';

const initialState: any = {
  // TODO: Add models type
  status: ResponseStatus.IDLE,
  onbordingData: {
    isStartService: false,
  },
};

const onbordingSlice = createSlice({
  name: 'onbording',
  initialState,
  reducers: {
    addOnbordingData(state, action) {
      const { payload } = action;

      switch (payload) {
        case OnboardingStep.StartService:
          state.onbordingData.isStartService = true;
          break;
        default:
          break;
      }
    },
  },
  extraReducers: builder => {
    builder
      // addClient
      .addCase(addClient.pending, state => {
        state.status = ResponseStatus.PENDING;
      })
      .addCase(addClient.fulfilled, (state, action) => {
        // TODO: Use response data from the response
      })
      .addCase(addClient.rejected, (state, action) => {
        const { status } = action.payload as {
          status: ResponseStatus;
        };

        state.status = status;
      })
      // fetchOnbordingData
      .addCase(fetchOnbordingData.pending, state => {
        state.status = ResponseStatus.PENDING;
      })
      .addCase(fetchOnbordingData.fulfilled, (state, action) => {
        const { payload } = action;
        // TODO: Use response data from the response

        state.status = ResponseStatus.FULFILLED;
      })
      .addCase(fetchOnbordingData.rejected, (state, action) => {
        const { status } = action.payload as { status: ResponseStatus };

        state.status = status;
      });
  },
});

export const { addOnbordingData } = onbordingSlice.actions;

export default onbordingSlice.reducer;
