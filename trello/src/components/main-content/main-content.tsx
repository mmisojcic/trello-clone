import React from 'react';
import { Switch } from 'react-router-dom';
import AppRoutes from '../../router/app-routes';
import './main-content.scss';

const MainContent: React.FC = () => {
  return <main className="main-content">{AppRoutes}</main>;
};

export default MainContent;
