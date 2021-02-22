import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IMember } from '../../redux/data-types/member';
import { IRootReducer } from '../../redux/reducers';
import './main-header.scss';

const mainColor = '#026aa7';
const transparentColor = 'rgba(0,0,0,.32)';

const MainHeader: React.FC = () => {
  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = useState<string>();
  const member: IMember = useSelector<IRootReducer, IMember>(
    (state) => state.member
  );

  const avatar = `${member.avatarUrl}/170.png`;
  const title = `${member.username}`;

  useEffect(() => {
    if (location.pathname.includes('/board/')) {
      setBackgroundColor(transparentColor);
    } else {
      setBackgroundColor(mainColor);
    }
  }, [location.pathname]);

  return (
    <header id="main-header" className="header" style={{ backgroundColor }}>
      <div className="header-side" />
      <Link to="/member/boards">
        <div className="header-logo">
          <span className="header-logo-icon" />
          <span className="header-logo-text" />
        </div>
      </Link>
      <div className="header-side header-side-right">
        <button type="button" className="header-side-right-member">
          <div
            className="header-side-right-member-avatar"
            style={{ backgroundImage: `url(${avatar})` }}
            title={title}
          />
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
