import { configureStore } from '@reduxjs/toolkit';
import { brandingSlice } from '../branding/brandingSlice';

const store = configureStore({
  reducer: {
    branding: brandingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store }
