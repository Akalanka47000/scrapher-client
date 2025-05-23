import { default as axios } from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use((req) => {
  if (typeof window !== 'undefined') {
    req.headers['x-correlation-id'] = window.crypto.randomUUID();
  }
  return req;
});

export function formatError(error: any) {
  if (error.response) {
    return {
      status: error.response?.status,
      message: error.response?.data?.message,
      detail: error.response?.data?.error
    };
  } else if (error.request) {
    return {
      status: error.request?.status,
      message: error.request?.response?.message
    };
  }
  return {
    status: 0,
    message: 'Network Error'
  };
}

instance.interceptors.response.use(
  (res) => res.data,
  async (error: any) => {
    const formattedError = formatError(error);
    return Promise.reject(formattedError);
  }
);

export { instance };
