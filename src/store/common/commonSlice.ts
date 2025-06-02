import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CommonState {
  isLoadingModalVisible: boolean;
  isSuccessModalVisible: boolean;
}

const initialState: CommonState = {
  isLoadingModalVisible: false,
  isSuccessModalVisible: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoadingModalVisibility(state, action: PayloadAction<boolean>) {
      state.isLoadingModalVisible = action.payload;
    },
    setSuccessModalVisibility(state, action: PayloadAction<boolean>) {
      state.isSuccessModalVisible = action.payload;
    },
  },
});

export const { setLoadingModalVisibility, setSuccessModalVisibility } = commonSlice.actions;

export const commonReducer = commonSlice.reducer;
export default commonReducer;
