import { ResponseStatus } from '@/common/constants';
import { createSlice } from '@reduxjs/toolkit';
import { signAndTransfer } from './transfersApi';

export interface TransferData {
  fromAccount: string;
  toAccount: string;
  amount: number;
  currency: string;
  reason: string;
  valueDate: string;
  feeCollectionFromAccount: string;
}

export interface TransferState {
  status: ResponseStatus;
  transferData: TransferData;
}

const initialState: TransferState = {
  status: ResponseStatus.IDLE,
  transferData: {
    fromAccount: '',
    toAccount: '',
    amount: 0,
    currency: '',
    reason: '',
    valueDate: '',
    feeCollectionFromAccount: '',
  },
};

const transfersSlice = createSlice({
  name: 'transfers',
  initialState,
  reducers: {
    // define local reducers here if needed
  },
  extraReducers: builder => {
    builder
      .addCase(signAndTransfer.pending, state => {
        state.status = ResponseStatus.PENDING;
      })
      .addCase(signAndTransfer.fulfilled, state => {
        state.status = ResponseStatus.FULFILLED;
      })
      .addCase(signAndTransfer.rejected, (state, action) => {
        const { status } = action.payload as { status: ResponseStatus };
        state.status = status;
      });
  },
});

export const transfersReducer = transfersSlice.reducer;
export default transfersSlice;
