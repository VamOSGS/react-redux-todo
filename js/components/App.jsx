import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import ListContainer from '../containers/ListContainer';
import Done from './Done';
import Active from './Active';

const defaultPath = "/react-redux-todo/build/";
const githubRouteConfig = route => {
  if (window.location.host == "vamosgs.github.io") {
    console.log(defaultPath + route)
    return defaultPath + route
  }
  else {
    console.log(route)
    return route
  }
}

const App = () => (
  <div className="wrapper">
    <Home />
    {console.log(window.location)}
    <Route exact path={githubRouteConfig('')} component={ListContainer} />
    <Route path={githubRouteConfig('/done')} component={Done} />
    <Route path={githubRouteConfig('/active')} component={Active} />
  </div>
);

export default App;
