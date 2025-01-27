import { configureStore } from '@reduxjs/toolkit';
import { brandingSlice } from '../branding/brandingSlice';
import { menuSlice } from '../menu/menuSlice';
import { orderSlice } from '../order/orderSlice';

const store = configureStore({
  reducer: {
    branding: brandingSlice.reducer,
    menu: menuSlice.reducer,
    order: orderSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store }
