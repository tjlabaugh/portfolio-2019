import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import projectStyle from './project.module.scss';

const Project = ({ title, featuredImage, slug }) => {
  return (
    <div>
      <div className={projectStyle.project}>
        <Link to={`projects/${slug}`}>
          <div className={projectStyle.imageContainer}>
            <div className={projectStyle.titleContainer}>
              <div className={projectStyle.titleContainer__title}>
                <h3>{title}</h3>
              </div>
            </div>
            {featuredImage && (
              <Img
                fluid={featuredImage}
                className={projectStyle.gatsbyImageContainer}
                alt={title}
              />
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Project;
