import { configureStore } from '@reduxjs/toolkit';

import errorSlice from './error/errorSlice';
import onbordingSlice from './onbording/onbordingSlice';

const store = configureStore({
  reducer: {
    onbording: onbordingSlice,
    error: errorSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
