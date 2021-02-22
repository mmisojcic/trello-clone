import { flattenBackgroundImageScaled } from '../boards/boards.utils';
import { IBoard } from '../../redux/data-types/board';
import { ApiPath } from '../../api/constants';
import { IParamData } from '../../api/api.utils';
import { getData } from '../../api/axios-methods';
import { IMember } from '../../redux/data-types/member';

export const getMember = (): Promise<IMember> => {
  const pathsAndParamsData: IParamData[] = [
    { name: ApiPath.MEMBERS, value: 'me' },
  ];
  const queryParamsData: IParamData[] = [
    { name: ApiPath.BOARDS, value: 'open' },
    {
      name: 'board_fields',
      value:
        'name,closed,dateLastActivity,dateLastView,datePluginDisable,idOrganization,prefs,shortLink,shortUrl,url,creationMethod,subscribed',
    },
  ];

  return getData<IMember>(pathsAndParamsData, queryParamsData);
};

export const removeBoards = (member: IMember): IMember => {
  return { ...member, boards: [] };
};

export const removeBackgroundImageScaled = (boards: IBoard[]): IBoard[] => {
  return boards.map((board) => flattenBackgroundImageScaled(board));
};
