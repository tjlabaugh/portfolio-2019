import React from 'react';
import Project from './Project';
import portfolioStyle from './portfolio.module.scss';
import { projects } from '../data/projects';

const Portfolio = () => {
  return (
    <div className={portfolioStyle.portfolio}>
      <p>Hello.</p>
      <p>I'm TJ, a web developer.</p>
      <h2>Portfolio</h2>
      <p>Check out some of my work:</p>
      {console.log('projects:', projects)}
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
