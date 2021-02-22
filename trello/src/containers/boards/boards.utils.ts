import { IBackgroundImageScaled, IBoard } from '../../redux/data-types/board';
import { IParamData } from '../../api/api.utils';
import { saveData } from '../../api/axios-methods';
import { ApiPath } from '../../api/constants';

export const saveBoard = (name: string): Promise<IBoard> => {
  const pathsAndParamsData: IParamData[] = [{ name: ApiPath.BOARDS }];
  const queryParamsData: IParamData[] = [
    { name: 'name', value: name },
    { name: 'prefs_background', value: 'green' },
  ];

  return saveData<IBoard>(pathsAndParamsData, queryParamsData).then((data) =>
    flattenBackgroundImageScaled(data)
  );
};

export const flattenBackgroundImageScaled = (board: IBoard): IBoard => {
  const { prefs } = board;
  const backgroundImages = prefs?.backgroundImageScaled
    ? prefs.backgroundImageScaled.map((element) => element.url)
    : [];

  return {
    ...board,
    prefs: { ...prefs, backgroundImageScaled: [], backgroundImages },
  };
};
