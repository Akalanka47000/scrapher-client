import { AxiosRequestConfig } from 'axios';

export interface IAPIResponse<T = undefined> {
  data: T;
  message: string;
}

export interface RequestConfig<T> {
  v?: string;
  options?: AxiosRequestConfig & { _retry?: boolean };
  data?: T;
}
