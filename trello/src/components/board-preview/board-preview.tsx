import React from 'react';
import { Link } from 'react-router-dom';
import { IBoard } from '../../redux/data-types/board';
import './board-preview.scss';
import generateStyle from './board-preview.utils';

interface IBoardPreviewProps {
  board: IBoard;
}

const BoardPreview: React.FC<IBoardPreviewProps> = ({ board }) => {
  const backgroundStyle = generateStyle(board);

  return (
    <Link to={`/board/${board.id}`}>
      <div className="board-preview" style={backgroundStyle}>
        <div className="board-preview-fade" />
        <div className="board-preview-details">
          <div className="board-preview-details-title">{board?.name}</div>
          <div className="board-preview-details-options">
            {/* <span className="board-preview-details-options-star">
              <i className="bi bi-star" />
            </span> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BoardPreview;
