import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_STATE as initialState, MENU} from './constants';
import { menu } from './types';
import { fetchMenu } from './menuAPI';


const menuSlice = createSlice({
  name: MENU,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMenu.fulfilled, (state, action: PayloadAction<menu>) => {
        state.loading = false;
        state.menu = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export { menuSlice };
