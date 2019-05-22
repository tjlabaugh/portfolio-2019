import React from 'react';
import Layout from './Layout';
import { graphql } from 'gatsby';

class ProjectLayout extends React.Component {
  render() {
    const { markdownRemark } = this.props.data;

    return (
      <Layout>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </Layout>
    );
  }
}

export default ProjectLayout;

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
