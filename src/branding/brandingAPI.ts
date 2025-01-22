import { createAsyncThunk} from '@reduxjs/toolkit';
import { RESTAURANT_DETAILS_ENDPOINT } from '../apiEndpoints/constants';
import { FETCH_BY_BRANDING_ID, FAILED_TO_FECTH_BRANDING, SUCCESS_REQUEST_STATUS } from './constants';
import { branding } from './types';

const fetchBranding = createAsyncThunk<branding, string>(
    FETCH_BY_BRANDING_ID,
    async (brandId, { rejectWithValue }) => {
      try {
        const response = await fetch(`${RESTAURANT_DETAILS_ENDPOINT}${brandId}`);
        if (response.status !== SUCCESS_REQUEST_STATUS) {
          throw new Error(FAILED_TO_FECTH_BRANDING);
        }
        const data: branding = await response.json();
        return data;
      } catch (err) {
        return rejectWithValue((err as Error).message);
      }
    }
  );

export { fetchBranding }  