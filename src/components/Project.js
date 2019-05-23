import React from 'react';
import { Link } from 'gatsby';
import projectStyle from './project.module.scss';

const Project = ({ title, images, slug }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className={projectStyle.imageContainer} />
      <Link to={`projects/${slug}`}>{title}</Link>
    </div>
  );
};

export default Project;
