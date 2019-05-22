import React from 'react';
import navStyle from './nav.module.scss';
import { Link } from 'gatsby';

const Nav = () => {
  return (
    <nav className={navStyle.nav}>
      <ul>
        <li>
          <Link to="/">
            Home
            <div />
          </Link>
        </li>
        <li>
          <a href="#portfolio">
            Portfolio
            <div />
          </a>
        </li>
        <li>
          <a href="#contact">
            Contact
            <div />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
