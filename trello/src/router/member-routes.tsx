import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Boards from '../containers/boards/boards';

const MemberRoutes = (
  <Switch>
    <Route exact path="/member/boards" component={Boards} />
  </Switch>
);

export default MemberRoutes;
