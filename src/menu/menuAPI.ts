import { createAsyncThunk} from '@reduxjs/toolkit';
import { MENU_DETAILS_END_POINT } from '../api_endpoints/constants';
import { MENU_FETCH, FAILED_TO_FECTH_MENU, SUCCESS_REQUEST_STATUS } from './constants';
import { menu } from './types';

const fetchMenu = createAsyncThunk<menu, string>(
    MENU_FETCH,
    async ({ rejectWithValue }: any) => {
      try {
        const response = await fetch(MENU_DETAILS_END_POINT);
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