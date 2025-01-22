import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchBranding } from './brandingAPI';
import { useEffect } from 'react';

export function useBranding(brandId: string) {
  const dispatch = useAppDispatch();
  const { currentBrand, loading, error } = useAppSelector((state) => state.branding);

  useEffect(() => {
    if (brandId) {
      dispatch(fetchBranding(brandId));
    }
  }, [brandId, dispatch]);

  return { brand: currentBrand, loading, error };
}
