import { IPerformAnalysisRequest, IPerformAnalysisResponse } from '@/types';
import { instance } from './core';

export function performAnalysis({ v = 'v1', data, options }: IPerformAnalysisRequest) {
  return instance.post<unknown, IPerformAnalysisResponse>(`/api/${v}/analysis`, data, options);
}
