import React from 'react';
import { Link } from 'gatsby';

const Project = ({ name, image, link }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <Link to={link}>{name}</Link>
    </div>
  );
};

export default Project;
