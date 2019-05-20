import React from 'react';
import portfolioStyle from './portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={portfolioStyle.portfolio}>
      <p>Hello.</p>
      <p>I'm TJ, a web developer.</p>
      <h2>Portfolio</h2>
      <p>Check out some of my work:</p>
    </div>
  );
};

export default Portfolio;
