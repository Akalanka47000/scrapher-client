import { AxiosRequestConfig } from 'axios';

export interface IAPIResponse<T = undefined> {
  data: T;
  message: string;
}

export interface RequestConfig<T = undefined, E = undefined> {
  v?: string;
  options?: AxiosRequestConfig & { _retry?: boolean };
  data?: T;
  error?: E;
}
