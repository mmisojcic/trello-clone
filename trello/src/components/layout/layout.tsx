import React from 'react';
import './layout.scss';
import MainHeader from '../main-header/main-header';
import MainContent from '../main-content/main-content';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <MainHeader />
      <MainContent />
    </div>
  );
};

export default Layout;
