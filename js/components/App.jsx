import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import ListContainer from '../containers/ListContainer';
import Done from './Done';
import Active from './Active';

const App = () => (
  <div className="wrapper">
    <Home />
    {console.log(window.location)}
    <Route exact path="/" component={ListContainer} />
    <Route path="/done" component={Done} />
    <Route path="/active" component={Active} />
  </div>
);

export default App;
