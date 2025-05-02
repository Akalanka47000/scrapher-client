import { IAPIResponse, RequestConfig } from './common';

export type IPerformAnalysisRequest = RequestConfig<{
  target_url: string;
}>;

export interface IPerformAnalysisResult {
  html_version: string;
  page_title: string;
  heading_counts: {
    [key: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6']: number;
  };
  internal_link_count: number;
  external_link_count: number;
  inaccessible_link_count: number;
  contains_login_form: boolean;
  error?: {
    code: number;
    message: string;
  };
}

export type IPerformAnalysisResponse = IAPIResponse<IPerformAnalysisResult>;
