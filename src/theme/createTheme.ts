
import { DefaultTheme } from 'styled-components';
import { Branding } from '../branding/types';
import { DEFAULT_BRAND } from './constants'

const createTheme = (brand: Branding | null): DefaultTheme => !brand ? DEFAULT_BRAND : brand;

export { createTheme }