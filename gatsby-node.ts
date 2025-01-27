import path from 'path';

import { CreateNodeArgs, CreatePagesArgs } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

type GetAllMdxNodesQuery = {
  readonly allMdx: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly frontmatter: {
          readonly title: string;
        };
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
      allMdx(sort: { frontmatter: { date: ASC } }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
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
    console.error(result.errors);
  }

  const posts = result.data.allMdx.edges;
  const postTemplate = path.resolve(`./src/templates/blog-post/index.tsx`);

  posts.forEach(({ node }, index) => {
    const prevPost = index === 0 ? null : posts[index - 1].node;
    const nextPost = index === posts.length - 1 ? null : posts[index + 1].node;

    createPage({
      path: node.fields.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        prevPost: prevPost
          ? {
              id: prevPost.id,
              slug: prevPost.fields.slug,
              title: prevPost.frontmatter.title,
            }
          : null,
        nextPost: nextPost
          ? {
              id: nextPost.id,
              slug: nextPost.fields.slug,
              title: nextPost.frontmatter.title,
            }
          : null,
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
