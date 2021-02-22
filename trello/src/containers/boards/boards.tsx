import React, { useState } from 'react';
import './boards.scss';
import { useDispatch, useSelector } from 'react-redux';
import { IRootReducer } from '../../redux/reducers';
import BoardPreview from '../../components/board-preview/board-preview';
import CreateNewBoard from '../../components/create-new-board/create-new-board';
import { saveBoard } from './boards.utils';
import { IBoard } from '../../redux/data-types/board';
import { addBoard } from '../../redux/actions/boards.action';

const Boards: React.FC = () => {
  const dispatch = useDispatch();
  const boards: IBoard[] = useSelector<IRootReducer, IBoard[]>(
    (state) => state.boards
  );
  const [openCreateNewBoard, setOpenCreateNewBoard] = useState(false);

  const boardsPreview = boards.map((board, i) => {
    const key = i;
    return (
      <li className="boards-personal-list-item" key={key}>
        <BoardPreview board={board} />
      </li>
    );
  });

  const onSaveNewBoard = (name: string) => {
    saveBoard(name).then((board) => dispatch(addBoard(board)));
  };

  return (
    <section className="boards">
      <div className="boards-personal">
        <div className="boards-personal-header">
          <div className="boards-personal-header-icon">
            <i className="bi bi-person" />
          </div>
          <h3 className="boards-personal-header-title">Personal Boards</h3>
        </div>
        <ul className="boards-personal-list">
          {boardsPreview}
          <li className="boards-personal-list-item boards-add-new">
            <button type="button" onClick={() => setOpenCreateNewBoard(true)}>
              Create new board
            </button>
          </li>
        </ul>
      </div>
      {openCreateNewBoard && (
        <CreateNewBoard
          close={() => setOpenCreateNewBoard(false)}
          saveNewBoard={onSaveNewBoard}
        />
      )}
    </section>
  );
};

export default Boards;
