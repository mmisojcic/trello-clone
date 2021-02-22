import { hostURL, requiredQueryParams } from './constants';

export interface IParamData {
  name: string;
  value?: string | number | boolean;
}

export const generateQueryParams = (queryParamData: IParamData[]): string => {
  const params = queryParamData.map((paramData) => {
    const { name, value } = paramData;
    return `${encodeURIComponent(name)}=${
      value ? encodeURIComponent(value) : ''
    }`;
  });

  return `?${params.join('&')}`;
};

export const generatePathWithParams = (
  pathAndParamData: IParamData[]
): string => {
  const params = pathAndParamData.map((paramData) => {
    const { name, value } = paramData;
    return `${name}${value ? `/${value}` : ''}`;
  });

  return `${params.join('/')}`;
};

export const generateUrl = (
  pathAndParamData: IParamData[],
  queryParamData?: IParamData[]
) => {
  const pathsAndParams: string = generatePathWithParams(pathAndParamData);
  const queryParams: string = queryParamData
    ? `${generateQueryParams(queryParamData)}&`
    : '?';

  return `${pathsAndParams}${queryParams}${requiredQueryParams}`;
};
