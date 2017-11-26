import React from 'react';
import { Link } from 'react-router-dom';
import githubRouteConfig from '../githubconfig';

const Nav = () => (
  <nav>
    <Link  to={githubRouteConfig('')}>View All</Link>
    <Link  to={githubRouteConfig('active')}>Active</Link>
    <Link  to={githubRouteConfig('done')}>Done</Link>
  </nav>
);

export default Nav;
