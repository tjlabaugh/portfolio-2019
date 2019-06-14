import React from 'react';
import Layout from './Layout';
import Head from './Head';
import { graphql } from 'gatsby';
import backgroundImage from '../images/body-bg.png';
import projectPageStyle from './projectPage.module.scss';

class ProjectPage extends React.Component {
  render() {
    const { markdownRemark } = this.props.data;

    return (
      <Layout location={markdownRemark.frontmatter.slug}>
        <Head title={markdownRemark.frontmatter.title} />
        <div
          className={projectPageStyle.container}
          style={{
            background: `url(${backgroundImage}) repeat`,
          }}
        >
          <h1>{markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </div>
      </Layout>
    );
  }
}

export default ProjectPage;

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
      }
    }
  }
`;
