import { menuType } from './types';

const INITIAL_STATE: menuType = {
    menu: null,
    loading: false,
    error: null,
  };

const SUCCESS_REQUEST_STATUS = 200;  
const MENU_FETCH = 'menu/fetchMenu';
const FAILED_TO_FECTH_MENU = 'Some thing wrong happen, sorry we cant show menu';
const MENU = 'menu';
  
export { INITIAL_STATE, MENU_FETCH, FAILED_TO_FECTH_MENU, MENU, SUCCESS_REQUEST_STATUS }