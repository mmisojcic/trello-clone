import React from 'react';
import CollectInfo from '../common/collect-info/collect-info';
import './create-new-board.scss';

interface ICreateNewBoardProps {
  close: () => void;
  saveNewBoard: (name: string) => void;
}
const CreateNewBoard: React.FC<ICreateNewBoardProps> = ({
  close,
  saveNewBoard,
}) => {
  return (
    <div className="create-new-board">
      <div className="create-new-board-content">
        <CollectInfo
          buttonLabel="Create Board"
          textPlaceHolder="Add board title..."
          cancel={close}
          collect={(text) => saveNewBoard(text)}
        />
      </div>
    </div>
  );
};

export default CreateNewBoard;
