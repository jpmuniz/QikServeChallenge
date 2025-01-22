import { brandingType } from './types';

const INITIAL_STATE: brandingType = {
    currentBrand: null,
    loading: false,
    error: null,
  };
  
const SUCCESS_REQUEST_STATUS = 200;  
const FETCH_BY_BRANDING_ID = 'branding/fetchByBrandingId';
const FAILED_TO_FECTH_BRANDING = 'Failed to fetch brand';
const BRANDING = 'branding';
  
export { INITIAL_STATE, FETCH_BY_BRANDING_ID, FAILED_TO_FECTH_BRANDING, BRANDING, SUCCESS_REQUEST_STATUS }