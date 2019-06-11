import React from 'react';
import navStyle from './nav.module.scss';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';

const Nav = ({ location }) => {
  const resolveClick = e => {
    e.preventDefault();

    if (location === '/') {
      document.querySelector(e.target.hash).scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      navigate(e.target.href);
    }
  };

  return (
    <nav className={navStyle.nav}>
      <ul>
        {location !== '/' ? (
          <li>
            <Link to="/">
              Home
              <div />
            </Link>
          </li>
        ) : null}
        <li>
          <Link to="/#about" onClick={resolveClick}>
            About Me
            <div />
          </Link>
        </li>
        <li>
          <Link to="/#portfolio" onClick={resolveClick}>
            Portfolio
            <div />
          </Link>
        </li>
        <li>
          <Link to="/#contact" onClick={resolveClick}>
            Contact
            <div />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
