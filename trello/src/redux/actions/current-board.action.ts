import { IAction } from './types/action';
import { IBoard } from '../data-types/board';

export const SET_CURRENT_BOARD = 'board/set_current_board';

const setCurrentBoard = (board: IBoard): IAction<IBoard> => {
  return {
    type: SET_CURRENT_BOARD,
    payload: board,
  };
};

export default setCurrentBoard;
