import { SET_MEMBER } from '../actions/member.action';
import { IMember } from '../data-types/member';

import { IAction } from '../actions/types/action';

const initialState: IMember = {};

const member = (state = initialState, action: IAction<IMember>): IMember => {
  switch (action.type) {
    case SET_MEMBER:
      return action.payload;
    default:
      return state;
  }
};

export default member;
