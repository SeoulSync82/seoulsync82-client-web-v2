import { setAccessToken } from '@/utils/auth';
import { useLayoutEffect } from 'react';

export const useAuthHandler = () => {
  useLayoutEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (!token) return;
    setAccessToken(token);
    window.location.href = '/';
  }, []);
};
