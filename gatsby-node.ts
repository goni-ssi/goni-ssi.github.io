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

exports.createSchemaCustomization = ({ actions }: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  createTypes(`
    type SiteSiteMetadata {
      siteUrl: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields!
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String!
    }
  `);
};
