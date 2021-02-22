import { IBoard } from '../../data-types/board';

export const SET_BOARDS = '/members/set_boards';
export const ADD_BOARD = '/boards/add_board';

interface ISetBoardsAction {
  type: typeof SET_BOARDS;
  payload: IBoard[];
}

interface IAddBoardAction {
  type: typeof ADD_BOARD;
  payload: IBoard;
}

export type BoardsActionTypes = ISetBoardsAction | IAddBoardAction;
