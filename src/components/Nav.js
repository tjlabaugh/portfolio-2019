import React from 'react';
import navStyle from './nav.module.scss';

const Nav = () => {
  return (
    <nav className={navStyle.nav}>
      <ul>
        <li>
          <a href="#home">
            Home<div />
          </a>
        </li>
        <li>
          <a href="#portfolio">
            Portfolio<div />
          </a>
        </li>
        <li>
          <a href="#contact">
            Contact<div />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
