import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import ListContainer from '../containers/ListContainer';
import Done from './Done';
import Active from './Active';
import githubRouteConfig from '../githubconfig';

const App = () => (
  <div className="wrapper">
    <Home />
    <Route exact path={githubRouteConfig('')} component={ListContainer} />
    <Route path={githubRouteConfig('done')} component={Done} />
    <Route path={githubRouteConfig('active')} component={Active} />
  </div>
);

export default App;
