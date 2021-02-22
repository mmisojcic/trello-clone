import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IList } from '../../redux/data-types/list';
import CardPreview from '../card-preview/card-preview';
import TitleTextarea from '../common/title-textarea/title-textarea';
import './list-preview.scss';
import ActionItem from '../common/action-tem/action-item';
import CollectInfo from '../common/collect-info/collect-info';
import { saveCard, updateListName } from './list-preview.utils';
import { updateList } from '../../redux/actions/lists.action';

interface IListPreviewProps {
  list: IList;
  index?: number;
}
const ListPreview: React.FC<IListPreviewProps> = ({ list, index }) => {
  const dispatch = useDispatch();
  const [openCollectInfo, setOpenCollectInfo] = useState(false);

  const cardsPreview = list.cards.map((card, i) => {
    const key = i;
    return <CardPreview card={card} key={key} />;
  });

  const onCollect = (title: string) => {
    saveCard(title, list.id).then((data) => {
      const newList = { ...list, cards: [...list.cards, data] };
      dispatch(updateList(newList));
    });
  };

  const onNameChange = (name: string) => {
    updateListName(name, list.id).then((data) => {
      const newList = { ...list, cards: [...list.cards], name };
      dispatch(updateList(newList));
    });
  };

  return (
    <div className="list-preview">
      <div className="list-preview-content">
        <div className="list-preview-content-header">
          <TitleTextarea
            textInput={list.name}
            onBlur={(textInput) => onNameChange(textInput)}
          />
        </div>
        <div className="list-preview-content-cards">
          {cardsPreview}
          {openCollectInfo && (
            <CollectInfo
              buttonLabel="Add Card"
              textPlaceHolder="Enter a title for this card..."
              cancel={() => setOpenCollectInfo(false)}
              collect={onCollect}
            />
          )}
        </div>
        {!openCollectInfo && (
          <div className="list-preview-content-options">
            <ActionItem
              icon={<i className="bi bi-plus" />}
              label="Add another card"
              className="action-item-list"
              onClick={() => setOpenCollectInfo(true)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListPreview;
