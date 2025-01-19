import path from 'path';
import './src/gatsby-types.d.ts';

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result: { data: Queries.GetAllMdxNodesQuery; errors?: unknown } = await graphql(`
    query GetAllMdxNodes {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error('Failed to fetch MDX data');
  }

  const posts = result.data.allMdx.edges;
  const postTemplate = path.resolve(`./src/components/templates/blog-post/index.tsx`);

  posts.forEach(({ node }) => {
    createPage({
      path: getPostPath(node.internal.contentFilePath),
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
      },
    });
  });
};

const getPostPath = (filePath: string | null) => {
  if (filePath == null) {
    return '';
  }

  const postRootPath = '/src/pages/posts/';
  const [_, postPath] = filePath.split(postRootPath);
  const withoutMdx = postPath.replace(/\/index\.mdx$/, '');

  return `/posts/${withoutMdx}`;
};
