import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import projectStyle from './project.module.scss';

const Project = ({ name, images, link }) => {
  return (
    <div>
      <h3>{name}</h3>
      <div className={projectStyle.imageContainer}>
        <Img fluid={images.imageOne.childImageSharp.fluid} />
      </div>
      <Link to={link}>{name}</Link>
    </div>
  );
};

export default Project;
