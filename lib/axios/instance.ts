import axios from 'axios';
import { API_BASE_URL, API_TIMEOUT } from './config';
import { setupInterceptors } from './interceptors';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

setupInterceptors(axiosInstance);

export default axiosInstance;