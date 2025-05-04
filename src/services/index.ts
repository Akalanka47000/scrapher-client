import { IAnalyseWebpageResponse, RequestConfig } from '@/types';
import { instance } from './core';

export function analyseWebpage({ v = 'v1', options }: RequestConfig) {
  return instance.get<unknown, IAnalyseWebpageResponse>(`/api/${v}/analysis/webpage`, {
    ...options,
    headers: {
      ...options?.headers,
      'Cache-Control': 'public'
    }
  });
}
