import {
  BoardsActionTypes,
  SET_BOARDS,
  ADD_BOARD,
} from './types/boards-actions.type';
import { IBoard } from '../data-types/board';

export const setBoards = (boards: IBoard[]): BoardsActionTypes => {
  return {
    type: SET_BOARDS,
    payload: boards,
  };
};

export const addBoard = (board: IBoard): BoardsActionTypes => {
  return {
    type: ADD_BOARD,
    payload: board,
  };
};
