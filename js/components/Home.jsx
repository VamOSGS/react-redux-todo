import React, { Component } from 'react';
import AddItemContainer from '../containers/AddItemConatainer';
import Nav from './Nav';

const Home = () => {
    return (
        <div className={'home'}>
            <h1>REACT-REDUX TODO</h1>
            <AddItemContainer />
            <Nav />
        </div>
    )
}

export default Home;