import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_STATE as initialState, BRANDING} from './constants';
import { Branding } from './types';
import { fetchBranding } from './brandingAPI';


const brandingSlice = createSlice({
  name: BRANDING,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBranding.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBranding.fulfilled, (state, action: PayloadAction<Branding>) => {
        state.loading = false;
        state.currentBrand = action.payload;
      })
      .addCase(fetchBranding.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export { brandingSlice };
