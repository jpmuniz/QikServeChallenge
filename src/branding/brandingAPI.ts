import { createAsyncThunk} from '@reduxjs/toolkit';
import { RESTAURANT_DETAILS_END_POINT } from '../api_endpoints/constants';
import { BRANDING_FETCH_BRANDING, FAILED_TO_FECTH_BRAND, SUCCESS_REQUEST_STATUS } from './constants';
import { Branding } from './types';

const fetchBranding = createAsyncThunk<Branding, string>(
    BRANDING_FETCH_BRANDING,
    async (brandId, { rejectWithValue }) => {
      try {
        const response = await fetch(`${RESTAURANT_DETAILS_END_POINT}${brandId}`);
        if (response.status !== SUCCESS_REQUEST_STATUS) {
          throw new Error(FAILED_TO_FECTH_BRAND);
        }
        const data: Branding = await response.json();
        return data;
      } catch (err) {
        return rejectWithValue((err as Error).message);
      }
    }
  );

export { fetchBranding }  