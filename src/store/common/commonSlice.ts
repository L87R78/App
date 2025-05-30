import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CommonState {
  isLoadingModalVisible: boolean;
}

const initialState: CommonState = {
  isLoadingModalVisible: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoadingModalVisibility(state, action: PayloadAction<boolean>) {
      state.isLoadingModalVisible = action.payload;
    },
  },
});

export const { setLoadingModalVisibility } = commonSlice.actions;

export const commonReducer = commonSlice.reducer;
export default commonReducer;
