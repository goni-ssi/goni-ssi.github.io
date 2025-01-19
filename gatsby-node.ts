import path from 'path';

import { CreateNodeArgs, CreatePagesArgs, CreateSchemaCustomizationArgs } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

type GetAllMdxNodesQuery = {
  readonly allMdx: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly fields: {
          slug: string;
        };
        readonly internal: { readonly contentFilePath: string | null };
      };
    }>;
  };
};

exports.createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions;

  const result = (await graphql(`
    query GetAllMdxNodes {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            id
            fields {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `)) as { data: GetAllMdxNodesQuery; errors?: unknown };

  if (result.errors) {
    throw new Error('Failed to fetch MDX data', result.errors);
  }

  const posts = result.data.allMdx.edges;
  const postTemplate = path.resolve(`./src/templates/blog-post/index.tsx`);

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }: CreateNodeArgs) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const filePath = createFilePath({ node, getNode });
    const sideSlashRemoved = filePath.replace(/^\/|\/$/g, '');

    const value = `/posts/${sideSlashRemoved}`;

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
