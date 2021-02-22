import axios, { AxiosResponse } from 'axios';
import { IParamData, generateUrl } from './api.utils';

export const getData = <R>(
  pathsAndParams: IParamData[],
  queryParams?: IParamData[]
): Promise<R> => {
  const url = generateUrl(pathsAndParams, queryParams);

  return axios.get<R, AxiosResponse<R>>(url).then((response) => response.data);
};

export const saveData = <R>(
  pathsAndParams: IParamData[],
  queryParams?: IParamData[]
): Promise<R> => {
  const url = generateUrl(pathsAndParams, queryParams);

  return axios.post<R, AxiosResponse<R>>(url).then((response) => response.data);
};

export const updateData = <R>(
  pathsAndParams: IParamData[],
  queryParams?: IParamData[]
): Promise<R> => {
  const url = generateUrl(pathsAndParams, queryParams);

  return axios.put<R, AxiosResponse<R>>(url).then((response) => response.data);
};

export const deleteData = <R>(): Promise<R> => {
  return axios
    .put<R, AxiosResponse<R>>('', {})
    .then((response) => response.data);
};
