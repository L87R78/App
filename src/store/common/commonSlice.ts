import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CommonState {
  isLoadingModalVisible: boolean;
  currentTab: number;
}

const initialState: CommonState = {
  isLoadingModalVisible: false,
  currentTab: 0,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoadingModalVisibility(state, action: PayloadAction<boolean>) {
      state.isLoadingModalVisible = action.payload;
    },
    setCurrentTab(state, action: PayloadAction<number>) {
      state.currentTab = action.payload;
    },
  },
});

export const { setLoadingModalVisibility, setCurrentTab } = commonSlice.actions;

export const commonReducer = commonSlice.reducer;
export default commonReducer;
