import React from 'react';
import firefox from '../images/firefox.png';
import chrome from '../images/chrome.png';
import ieStyle from './IE.module.scss';

const IE = () => {
  return (
    <div className={ieStyle.ie}>
      <p>Hello, looks like you may be using an older browser.</p>
      <p>Please try viewing this site with a modern browser like:</p>
      <div className={ieStyle.logos}>
        <a
          href="https://www.mozilla.org/en-US/firefox/new/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={firefox} alt="Mozilla Firefox" />
        </a>
        <a
          href="https://www.google.com/chrome/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={chrome} alt="Google Chrome" />
        </a>
      </div>
    </div>
  );
};

export default IE;
