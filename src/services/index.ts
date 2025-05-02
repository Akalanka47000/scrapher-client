import { IPerformAnalysisRequest, IPerformAnalysisResponse } from '@/types';
import { instance } from './core';

export function performAnalysis({ v = 'v1', options }: IPerformAnalysisRequest) {
  return instance.get<unknown, IPerformAnalysisResponse>(`/api/${v}/analysis`, options);
}
