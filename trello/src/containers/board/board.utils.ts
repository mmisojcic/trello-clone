import { flattenBackgroundImageScaled } from '../boards/boards.utils';
import { IList } from '../../redux/data-types/list';
import { saveData, getData } from '../../api/axios-methods';
import { IBoard, IPrefs } from '../../redux/data-types/board';
import { ApiPath } from '../../api/constants';

import { IParamData } from '../../api/api.utils';

export const getBoard = (boardId: string) => {
  const pathsAndParamsData: IParamData[] = [
    { name: ApiPath.BOARDS, value: boardId },
  ];

  return getData<IBoard>(pathsAndParamsData).then((data) =>
    flattenBackgroundImageScaled(data)
  );
};

export const getLists = (boardId: string) => {
  const pathsAndParamsData: IParamData[] = [
    { name: ApiPath.BOARDS, value: boardId },
    { name: ApiPath.LISTS },
  ];
  const queryParamsData: IParamData[] = [
    { name: 'cards', value: 'all' },
    {
      name: 'card_fields',
      value: 'id,desc,label,name,pos,idList',
    },
  ];

  return getData<IList[]>(pathsAndParamsData, queryParamsData);
};

export const saveList = (
  name: string,
  idBoard: string | undefined
): Promise<IList> => {
  const pathsAndParamsData: IParamData[] = [{ name: ApiPath.LISTS }];
  const queryParamsData: IParamData[] = [
    { name: 'name', value: name },
    { name: 'pos', value: 'bottom' },
    { name: 'idBoard', value: idBoard },
  ];

  return saveData<IList>(pathsAndParamsData, queryParamsData).then((data) =>
    mapNewList(data)
  );
};

const mapNewList = (list: IList): IList => {
  return { ...list, cards: [] };
};

export const setBodyBackgroundImage = (boardPrefs?: IPrefs) => {
  return {
    backgroundImage:
      boardPrefs?.backgroundImages.length !== 0
        ? `url(${boardPrefs?.backgroundImages[7]})`
        : '',
    backgroundColor: boardPrefs?.backgroundColor,
  };
};
