import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Project from './Project';

const PROJECT_QUERY = graphql`
  query Projects {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

const Projects = () => (
  <StaticQuery
    query={PROJECT_QUERY}
    render={({ allMarkdownRemark }) => (
      <div>
        <h3>Projects</h3>
        {allMarkdownRemark.edges.map(edge => (
          <Project
            key={edge.node.frontmatter.slug}
            title={edge.node.frontmatter.title}
            // images={props.images}
            slug={`/projects${edge.node.frontmatter.slug}`}
          />
        ))}
      </div>
    )}
  />
);

export default Projects;
