import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import ListContainer from '../containers/ListContainer';
import Done from './Done';
import Active from './Active';

class App extends Component {
    render() {
        return (
            <div className={'wrapper'}>
                <Home />
                <Route exact path="/" component={ListContainer} />
                <Route path="/done" component={Done} />
                <Route path="/active" component={Active} />
            </div>
        )
    }
}

export default App;
