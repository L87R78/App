import { configureStore } from '@reduxjs/toolkit';

import onbordingSlice from './onbording/onbording.Slice';
import errorSlice from './errorSlice/errorSlice';

const store = configureStore({
  reducer: {
    onbording: onbordingSlice,
    error: errorSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
