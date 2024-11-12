import { useState } from 'react';
import { axios } from '@/lib/axios';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useApi<T = any>() {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const request = async (config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await axios.request<T>(config);
      setState((prev) => ({ ...prev, data: response.data, loading: false }));
      return response;
    } catch (error) {
      const axiosError = error as AxiosError;
      setState((prev) => ({
        ...prev,
        error: new Error(axiosError.message),
        loading: false,
      }));
      throw error;
    }
  };

  return {
    ...state,
    request,
  };
}