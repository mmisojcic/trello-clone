import { IMember } from '../data-types/member';
import { IAction } from './types/action';

export const SET_MEMBER = 'boards/set_member';

const setMember = (member: IMember): IAction<IMember> => {
  return {
    type: SET_MEMBER,
    payload: member,
  };
};

export default setMember;
