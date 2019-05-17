import React from 'react';
import navStyle from './nav.module.scss';

const Nav = () => {
  return (
    <nav className={navStyle.nav}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
