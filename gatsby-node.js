const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  response.data.allMarkdownRemark.edges.forEach(({ node }) =>
    createPage({
      component: path.resolve('./src/components/ProjectLayout.js'),
      path: `/projects/${node.frontmatter.slug}`,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  );
};
