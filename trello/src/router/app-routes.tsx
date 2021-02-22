import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Board from '../containers/board/board';
import Member from '../containers/member/member';

const AppRoutes = (
  <Switch>
    <Route exact path="/">
      <Redirect to="/member/boards" />
    </Route>
    <Route path="/member" component={Member} />
    <Route path="/board/:id" component={Board} />
    <Route component={() => <div>404</div>} />
  </Switch>
);

export default AppRoutes;
