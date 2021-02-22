import { IPrefs, IBoard } from '../data-types/board';
import {
  ADD_BOARD,
  BoardsActionTypes,
  SET_BOARDS,
} from '../actions/types/boards-actions.type';

const initialState: IBoard[] = [];

const boards = (state = initialState, action: BoardsActionTypes): IBoard[] => {
  switch (action.type) {
    case SET_BOARDS:
      return action.payload;
    case ADD_BOARD:
      return [
        ...state.reduce((accumulator: IBoard[], currBoard) => {
          const backgroundImages = [
            ...(currBoard.prefs?.backgroundImages as string[]),
          ];
          const prefs: IPrefs = { ...currBoard.prefs, backgroundImages };
          const board: IBoard = {
            ...currBoard,
            prefs,
          };

          accumulator.push(board);
          return accumulator;
        }, []),
      ];
    default:
      return state;
  }
};

export default boards;
