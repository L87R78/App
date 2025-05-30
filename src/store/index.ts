import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './common/commonSlice';
import { errorReducer } from './error/errorSlice';
import { onboardingReducer } from './onbording/onbordingSlice';
import { clientAccountsReducer } from './clientAccounts/clientAccountsSlice';

const store = configureStore({
  reducer: {
    clientAccounts: clientAccountsReducer,
    onboarding: onboardingReducer,
    common: commonReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
