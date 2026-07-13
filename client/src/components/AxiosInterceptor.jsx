import { useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';
import axiosInstance from '../lib/axios.js';

const AxiosInterceptor = ({ children }) => {
  const { getToken } = useAuth();

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      async (config) => {
        try {
          const token = await getToken();
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        } catch (error) {
          console.error("Error fetching clerk token:", error);
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, [getToken]);

  return children;
};

export default AxiosInterceptor;
