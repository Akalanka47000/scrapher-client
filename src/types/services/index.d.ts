import { IAPIResponse, RequestConfig } from './common';

export { IAPIResponse, RequestConfig };

export interface IAnalyseWebpageResult {
  html_version: string;
  page_title: string;
  heading_counts: {
    [key: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6']: number;
  };
  internal_link_count: number;
  external_link_count: number;
  inaccessible_link_count: number;
  contains_login_form: boolean;
}

export interface IAnalyzeWebpageError {
  target_status?: number;
  target_detail: string;
}

export type IAnalyseWebpageResponse = IAPIResponse<IAnalyseWebpageResult, IAnalyzeWebpageError>;
