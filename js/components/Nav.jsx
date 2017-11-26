import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <Link href="/" to="/">View All</Link>
    <Link href="/active" to="/active">Active</Link>
    <Link href="/active" to="/done">Done</Link>
  </nav>
);

export default Nav;
