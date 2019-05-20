import React from 'react';
import Project from './Project';
import portfolioStyle from './portfolio.module.scss';
import { projects } from '../data/projects';

const Portfolio = () => {
  return (
    <div className={portfolioStyle.portfolio}>
      <h2>Portfolio</h2>
      <p>Hello.</p>
      <p>I'm TJ, a web developer.</p>
      <p>Check out some of my work:</p>
      {projects.map((project, i) => {
        return (
          <Project
            key={i}
            name={project.name}
            image={project.image}
            link={project.link}
          />
        );
      })}
    </div>
  );
};

export default Portfolio;
