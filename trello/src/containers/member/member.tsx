import React, { useEffect } from 'react';
import './member.scss';
import { useDispatch } from 'react-redux';
import MemberRoutes from '../../router/member-routes';
import setMember from '../../redux/actions/member.action';
import {
  getMember,
  removeBackgroundImageScaled,
  removeBoards,
} from './member.utils';
import { setBoards } from '../../redux/actions/boards.action';

const Member: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMember().then((data) => {
      dispatch(setMember(removeBoards(data)));
      if (data.boards)
        dispatch(setBoards(removeBackgroundImageScaled(data.boards)));
    });
  }, []);

  return (
    <section className="member">
      <div className="member-content">{MemberRoutes}</div>
    </section>
  );
};

export default Member;
