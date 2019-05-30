import React from 'react';
import Projects from './Projects';
import portfolioStyle from './portfolio.module.scss';
import backgroundImage from '../images/body-bg.png';

const Portfolio = props => {
  return (
    <div
      style={{
        background: `url(${backgroundImage}) repeat`,
      }}
      className={portfolioStyle.portfolio}
      id="portfolio"
    >
      <div className={portfolioStyle.container}>
        <h2>Portfolio</h2>
        <p>Hello!</p>
        <p>
          Hello! My name is TJ. I am a web developer passionate about front-end
          development, working with <span className="js">JavaScript</span> and
          the <span className="react">React</span> library.
        </p>
        <p>
          Check out some of my work below and feel free to reach out to me in
          the contact section below!
        </p>
        <Projects />
      </div>
    </div>
  );
};

export default Portfolio;
