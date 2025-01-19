import path from 'path';

import { getPostPath } from './src/utils/get-post-path.ts';

type GetAllMdxNodesQuery = {
  readonly allMdx: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly frontmatter: {
          readonly title: string | null;
          readonly date: string | null;
        } | null;
        readonly internal: { readonly contentFilePath: string | null };
      };
    }>;
  };
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result: { data: GetAllMdxNodesQuery; errors?: unknown } = await graphql(`
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
    throw new Error('Failed to fetch MDX data', result.errors);
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
