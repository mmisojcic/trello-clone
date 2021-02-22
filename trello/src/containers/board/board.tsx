import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './board.scss';
import { useDispatch, useSelector } from 'react-redux';
import ListPreview from '../../components/list-preview/list-preview';
import {
  getBoard,
  getLists,
  saveList,
  setBodyBackgroundImage,
} from './board.utils';
import { IRootReducer } from '../../redux/reducers';
import { IList } from '../../redux/data-types/list';
import { setLists, addList } from '../../redux/actions/lists.action';
import setCurrentBoard from '../../redux/actions/current-board.action';
import { IBoard } from '../../redux/data-types/board';
import ActionItem from '../../components/common/action-tem/action-item';
import CollectInfo from '../../components/common/collect-info/collect-info';

interface IRouteParams {
  id: string;
}

const Board: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<IRouteParams>();
  const lists: IList[] = useSelector<IRootReducer, IList[]>(
    (state) => state.lists
  );
  const board: IBoard = useSelector<IRootReducer, IBoard>(
    (state) => state.currentBoard
  );
  const [openCollectInfo, setOpenCollectInfo] = useState(false);

  const listsPreview = lists.map((list, i) => {
    const key = i;
    return <ListPreview list={list} key={key} />;
  });
  const backgroundStyle = setBodyBackgroundImage(board?.prefs);

  const onCollect = (title: string) => {
    saveList(title, board.id).then((data) => dispatch(addList(data)));
  };

  useEffect(() => {
    getLists(id).then((data) => dispatch(setLists(data)));
    getBoard(id).then((data) => {
      dispatch(setCurrentBoard(data));
    });

    return () => {
      dispatch(setLists([]));
      dispatch(setCurrentBoard({}));
    };
  }, []);

  return (
    <div>
      {listsPreview && (
        <div className="board">
          {listsPreview}
          <div className="board-add-list">
            {openCollectInfo ? (
              <CollectInfo
                buttonLabel="Add List"
                textPlaceHolder="Enter list title..."
                className="add-new-list"
                cancel={() => setOpenCollectInfo(false)}
                collect={(title) => onCollect(title)}
              />
            ) : (
              <ActionItem
                icon={<i className="bi bi-plus" />}
                label="Add another list"
                className="action-item-transparent"
                onClick={() => setOpenCollectInfo(true)}
              />
            )}
          </div>
          <div className="board-background" style={backgroundStyle} />
        </div>
      )}
    </div>
  );
};

export default Board;
