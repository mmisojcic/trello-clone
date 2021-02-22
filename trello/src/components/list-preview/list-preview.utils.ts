import { updateData, saveData } from '../../api/axios-methods';
import { ICard } from '../../redux/data-types/list';
import { IParamData } from '../../api/api.utils';

import { ApiPath } from '../../api/constants';

export const saveCard = (name: string, idList: string): Promise<ICard> => {
  const pathsAndParamsData: IParamData[] = [{ name: ApiPath.CARDS }];
  const queryParamsData: IParamData[] = [
    { name: 'name', value: name },
    { name: 'pos', value: 'bottom' },
    { name: 'idList', value: idList },
  ];

  return saveData<ICard>(pathsAndParamsData, queryParamsData).then((data) =>
    mapNewCard(data)
  );
};

export const mapNewCard = (card: ICard): ICard => {
  const { id, name, pos, desc, idList } = card;
  return { id, name, pos, desc, idList };
};

export const updateListName = (name: string, idList: string) => {
  const pathsAndParamsData: IParamData[] = [
    { name: ApiPath.LISTS, value: idList },
  ];
  const queryParamsData: IParamData[] = [{ name: 'name', value: name }];

  return updateData(pathsAndParamsData, queryParamsData).then();
};
