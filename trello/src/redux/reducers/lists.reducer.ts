import {
  UPDATE_LIST,
  SET_LISTS,
  ADD_NEW_LIST,
  ListsActionTypes,
} from '../actions/types/lists-actions.type';

import { IList } from '../data-types/list';

const initialState: IList[] = [];

const lists = (state = initialState, action: ListsActionTypes): IList[] => {
  switch (action.type) {
    case SET_LISTS:
      return action.payload;
    case ADD_NEW_LIST:
      return [...state, { ...action.payload }];
    case UPDATE_LIST:
      return [
        ...state.reduce((accumulator: IList[], currList) => {
          const list =
            currList.id === action.payload.id
              ? action.payload
              : {
                  ...currList,
                  cards: [...currList.cards],
                };

          accumulator.push(list);
          return accumulator;
        }, []),
      ];
    default:
      return state;
  }
};

export default lists;
