import React from 'react';
import { ICard } from '../../redux/data-types/list';
import './card-preview.scss';

interface ICardPreviewProps {
  card: ICard;
}
const CardPreview: React.FC<ICardPreviewProps> = ({ card }) => {
  return (
    <div className="card-preview">
      <div className="card-preview-content">
        {/* <div className="card-preview-content-label">a</div> */}
        <span className="card-preview-content-name">{card.name}</span>
      </div>
    </div>
  );
};

export default CardPreview;
