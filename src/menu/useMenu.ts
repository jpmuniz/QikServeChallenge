import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchMenu } from './menuAPI';
import { useEffect } from 'react';

const useMenu = () => {
  const dispatch = useAppDispatch();
  const { menu, loading, error } = useAppSelector((state) => state.menu);

  useEffect(() => {
      dispatch(fetchMenu(""));
  }, [dispatch]);

  return { menu: menu, loading, error };
}

export { useMenu }
