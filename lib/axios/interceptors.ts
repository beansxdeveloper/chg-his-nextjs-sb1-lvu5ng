import { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { HTTP_STATUS } from './config';
import { message } from 'antd';

export const setupInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // Get token from localStorage or other storage mechanism
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error: AxiosError) => {
      const status = error.response?.status;

      switch (status) {
        case HTTP_STATUS.UNAUTHORIZED:
          // Handle unauthorized access
          message.error('Session expired. Please login again.');
          // Redirect to login or refresh token
          break;

        case HTTP_STATUS.FORBIDDEN:
          message.error('You do not have permission to access this resource.');
          break;

        case HTTP_STATUS.NOT_FOUND:
          message.error('The requested resource was not found.');
          break;

        case HTTP_STATUS.INTERNAL_SERVER_ERROR:
          message.error('An internal server error occurred. Please try again later.');
          break;

        default:
          message.error(error.message || 'An unexpected error occurred.');
      }

      return Promise.reject(error);
    }
  );
};