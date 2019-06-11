import React from 'react';
import { Link } from 'gatsby';
import style404 from './404.module.scss';

const Component404 = () => {
  return (
    <div className={style404.page404}>
      <h1>404</h1>
      <h2>Oh no!</h2>
      <h3>Page not found.</h3>
      <Link to="/">
        <h4>Back to homepage</h4>
        <div />
      </Link>
    </div>
  );
};

export default Component404;
