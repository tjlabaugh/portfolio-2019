import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import favicon from '../images/favicon.png';

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
      <link rel="shortcut icon" type="image/png" href={favicon} />
    </Helmet>
  );
};

export default Head;
