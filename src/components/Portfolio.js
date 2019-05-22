import React from 'react';
import Projects from './Projects';
import portfolioStyle from './portfolio.module.scss';
import backgroundImage from '../images/body-bg.png';
// import { projects } from '../data/projects';

const Portfolio = props => {
  return (
    <div
      style={{
        background: `url(${backgroundImage}) repeat`,
      }}
      className={portfolioStyle.portfolio}
    >
      <div className={portfolioStyle.container}>
        <h2>Portfolio</h2>
        <p>Hello.</p>
        <p>I'm TJ, a web developer.</p>
        <p>Check out some of my work:</p>
        <Projects />
        {/* {projects.map((project, i) => {
          return (
            <Project
              key={i}
              name={project.name}
              images={props.images}
              link={project.link}
            />
          );
        })} */}
      </div>
    </div>
  );
};

export default Portfolio;
