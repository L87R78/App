import { createSlice } from '@reduxjs/toolkit';

import { ResponseStatus } from '@/common/constants';

import { addClientAccounts } from './clientAccountsApi';

const initialState = {
  status: ResponseStatus.IDLE,
  productGroups: 'Standard Current Accounts with Plan',
  products: 'Choose a product',
  currency: 'EUR',
  plans: 'Basic',
  hasClientAccountsData: false,
};

const clientAccountsSlice = createSlice({
  name: 'clientAccounts',
  initialState,
  reducers: {
    setClientAccounts: (state, action) => {
      state.hasClientAccountsData = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addClientAccounts.pending, state => {
        state.status = ResponseStatus.PENDING;
      })
      .addCase(addClientAccounts.fulfilled, (state, action) => {
        state.status = ResponseStatus.FULFILLED;
      })
      .addCase(addClientAccounts.rejected, (state, action) => {
        const { status } = action.payload as { status: ResponseStatus };
        state.status = status;
      });
  },
});

export const { setClientAccounts } = clientAccountsSlice.actions;

export const clientAccountsReducer = clientAccountsSlice.reducer;
export default clientAccountsSlice;
