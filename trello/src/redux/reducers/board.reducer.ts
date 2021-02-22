import { SET_CURRENT_BOARD } from '../actions/current-board.action';

import { IAction } from '../actions/types/action';
import { IBoard } from '../data-types/board';

const initialState: IBoard = {};

const currentBoard = (
  state = initialState,
  action: IAction<IBoard>
): IBoard => {
  switch (action.type) {
    case SET_CURRENT_BOARD:
      return action.payload;
    default:
      return state;
  }
};

export default currentBoard;
