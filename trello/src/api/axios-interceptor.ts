import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { hostURL } from './constants';

const setupAxiosInterceptors = () => {
  const onRequestSuccess = (config: AxiosRequestConfig) => {
    return config;
  };
  const onResponseSuccess = (response: AxiosResponse) => response;
  const onResponseError = (error: AxiosError) => {
    return Promise.reject(error);
  };
  axios.defaults.baseURL = hostURL;
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
