import { createAsyncThunk} from '@reduxjs/toolkit';
import { MENU_DETAILS_ENDPOINT } from '../apiEndpoints/constants';
import { FETCH_MENU, FAILED_TO_FECTH_MENU, SUCCESS_REQUEST_STATUS } from './constants';
import { menu } from './types';

const fetchMenu = createAsyncThunk<menu, string>(
    FETCH_MENU,
    async ({ rejectWithValue }: any) => {
      try {
        const response = await fetch(MENU_DETAILS_ENDPOINT);
        if (response.status !== SUCCESS_REQUEST_STATUS) {
          throw new Error(FAILED_TO_FECTH_MENU);
        }
        const data: menu = await response.json();
        return data;
      } catch (err) {
        return rejectWithValue((err as Error).message);
      }
    }
  );

export { fetchMenu }  