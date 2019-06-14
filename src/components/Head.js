import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Helmet title={`${data.site.siteMetadata.title} | ${title}`}>
      <meta name="description" content="TJ LaBaugh Web Developer" />
    </Helmet>
  );
};

export default Head;
