import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './common/commonSlice';
import { errorReducer } from './error/errorSlice';
import { onboardingReducer } from './onbording/onbordingSlice';

const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    common: commonReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
