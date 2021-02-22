import {
  ListsActionTypes,
  SET_LISTS,
  ADD_NEW_LIST,
  UPDATE_LIST,
} from './types/lists-actions.type';
import { IList } from '../data-types/list';

export const setLists = (lists: IList[]): ListsActionTypes => {
  return {
    type: SET_LISTS,
    payload: lists,
  };
};

export const addList = (list: IList): ListsActionTypes => {
  return {
    type: ADD_NEW_LIST,
    payload: list,
  };
};

export const updateList = (list: IList): ListsActionTypes => {
  return {
    type: UPDATE_LIST,
    payload: list,
  };
};
