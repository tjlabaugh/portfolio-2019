import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import projectStyle from './project.module.scss';

const Project = ({ title, featuredImage, slug }) => {
  return (
    <div>
      <h3>{title}</h3>
      {featuredImage && (
        <Img
          fluid={featuredImage}
          objectFit="cover"
          objectPosition="50% 50%"
          alt={title}
        />
      )}
      <div className={projectStyle.imageContainer} />
      <Link to={`projects/${slug}`}>{title}</Link>
    </div>
  );
};

export default Project;
