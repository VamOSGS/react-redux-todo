import React from 'react';
import AddItemContainer from '../containers/AddItemConatainer';
import Nav from './Nav';

const Home = () => (
  <div className="home">
    <h1>REACT-REDUX TODO</h1>
    <AddItemContainer />
    <Nav />
  </div>
);

export default Home;
