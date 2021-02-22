import { IPrefs } from '../../redux/data-types/board';
import { ApiPath } from '../../api/constants';
import { IParamData } from '../../api/api.utils';
import { getData } from '../../api/axios-methods';

export const getBoardPrefs = (boardId: string): Promise<IPrefs> => {
  const pathsAndParamsData: IParamData[] = [
    { name: ApiPath.BOARDS, value: boardId },
    { name: 'prefs' },
  ];

  return getData<IPrefs>(pathsAndParamsData);
};

export default getBoardPrefs;
