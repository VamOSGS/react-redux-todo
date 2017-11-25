import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const Nav = props => {
    return (
        <nav>
            <Link to="/">View All</Link>
            <Link to="/active">Active</Link>
            <Link to="/done">Done</Link>
        </nav>
    )
}
export default Nav;
