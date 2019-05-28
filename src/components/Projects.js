import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Project from './Project';
import projectsStyles from './projects.module.scss';

const PROJECT_QUERY = graphql`
  query Projects {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
      <div className={projectsStyles.projects}>
        <h3>Projects</h3>
        {allMarkdownRemark.edges.map(edge => (
          <Project
            key={edge.node.frontmatter.slug}
            title={edge.node.frontmatter.title}
            featuredImage={
              edge.node.frontmatter.featuredImage &&
              edge.node.frontmatter.featuredImage.childImageSharp.fluid
            }
            slug={edge.node.frontmatter.slug}
          />
        ))}
      </div>
    )}
  />
);

export default Projects;
