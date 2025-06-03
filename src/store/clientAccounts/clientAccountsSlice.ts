import { ResponseStatus } from '@/common/constants';
import { createSlice } from '@reduxjs/toolkit';
import { createClientAccount } from './clientAccountsApi';

const initialState = {
  status: ResponseStatus.IDLE,
  data: null,
  hasClientAccountsData: false,
};

const clientAccountsSlice = createSlice({
  name: 'clientAccounts',
  initialState,
  reducers: {
    setHasClientAccountsData: (state, action) => {
      state.hasClientAccountsData = action.payload;
    },
    setClientAccountsData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createClientAccount.pending, state => {
        state.status = ResponseStatus.PENDING;
      })
      .addCase(createClientAccount.fulfilled, state => {
        state.status = ResponseStatus.FULFILLED;
      })
      .addCase(createClientAccount.rejected, (state, action) => {
        const { status } = action.payload as { status: ResponseStatus };
        state.status = status;
      });
  },
});

export const { setHasClientAccountsData, setClientAccountsData } = clientAccountsSlice.actions;

export const clientAccountsReducer = clientAccountsSlice.reducer;
export default clientAccountsSlice;
