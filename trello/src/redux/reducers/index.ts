import { combineReducers } from 'redux';
import { IBoard } from '../data-types/board';
import lists from './lists.reducer';
import { IList } from '../data-types/list';
import { IMember } from '../data-types/member';
import member from './member.reducer';
import currentBoard from './board.reducer';
import boards from './boards.reducer';

export interface IRootReducer {
  member: IMember;
  boards: IBoard[];
  currentBoard: IBoard;
  lists: IList[];
}
const rootReducer = combineReducers<IRootReducer>({
  member,
  boards,
  currentBoard,
  lists,
});

export default rootReducer;
