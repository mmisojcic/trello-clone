import { IList } from '../../data-types/list';

export const SET_LISTS = '/board/set_lists';
export const ADD_NEW_LIST = '/board/add_new_list';
export const UPDATE_LIST = '/board/list-preview/update_list';
interface ISetListsAction {
  type: typeof SET_LISTS;
  payload: IList[];
}

interface IAddListToLists {
  type: typeof ADD_NEW_LIST;
  payload: IList;
}

interface IUpdateList {
  type: typeof UPDATE_LIST;
  payload: IList;
}

export type ListsActionTypes = ISetListsAction | IAddListToLists | IUpdateList;
