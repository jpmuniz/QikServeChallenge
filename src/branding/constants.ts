import { BrandingState } from './types';

const INITIAL_STATE: BrandingState = {
    currentBrand: null,
    loading: false,
    error: null,
  };

const SUCCESS_REQUEST_STATUS = 200;  
const BRANDING_FETCH_BRANDING = 'branding/fetchBranding';
const FAILED_TO_FECTH_BRAND = 'Failed to fetch brand';
const BRANDING = 'branding';
  
export { INITIAL_STATE, BRANDING_FETCH_BRANDING, FAILED_TO_FECTH_BRAND, BRANDING, SUCCESS_REQUEST_STATUS }