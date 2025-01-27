import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_STATE as initialState,ORDER} from './constants';
import { orderType } from './types';


const orderSlice = createSlice({
    name: ORDER,
    initialState,
    reducers: {
      setOrder: (state, action: PayloadAction<orderType>) => {
        state.orders.push(action.payload);
      },
      removeOrder: (state, action: PayloadAction<number>) => {
        state.orders = state.orders.filter((order) => 
            order.id !== action.payload);
      },
      clearOrders: (state) => {
        state.orders = [];
      },
    },
  });

  export const { setOrder, removeOrder, clearOrders } = orderSlice.actions;

export { orderSlice };
