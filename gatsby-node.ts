import path from 'path';

import { CreateNodeArgs, CreatePagesArgs, Node } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

type MdxNode = {
  id: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
    description: string | null;
  };
  internal: {
    contentFilePath: string | null;
  };
};

type GetAllMdxNodesQuery = {
  allMdx: {
    edges: Array<{
      node: MdxNode;
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
  const categoryMap = new Map<string, Node[]>();

  if (node.internal.type === `Mdx`) {
    const filePath = createFilePath({ node, getNode });
    const sideSlashRemoved = filePath.replace(/^\/|\/$/g, '');
    const category = sideSlashRemoved.split('/')[0];
    const value = `/posts/${sideSlashRemoved}`;

    if (category) {
      const categoryValue = categoryMap.get(category);

      if (categoryValue == null) {
        categoryMap.set(category, [node]);
      } else {
        categoryValue.push(node);
      }
    }

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.sourceNodes = async ({ getNodes, actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;
  const categoryMap = new Map<string, MdxNode[]>();

  // 모든 MDX 노드를 순회하면서 카테고리별로 분류
  const mdxNodes = getNodes().filter((node) => node.internal.type === 'Mdx');
  mdxNodes.forEach((node) => {
    const slug = node.fields?.slug as string;
    if (!slug) return;

    const category = slug.split('/posts/')[1].split('/')[0]; // '/posts/category/...' 형식에서 category 추출

    if (category) {
      const categoryNodes = categoryMap.get(category);

      if (categoryNodes == null) {
        categoryMap.set(category, [node]);
      } else {
        categoryNodes.push(node);
      }
    }
  });

  // 각 카테고리별로 노드 생성
  categoryMap.forEach((nodes, category) => {
    const sortedNodes = [...nodes].sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);
      return dateB.getTime() - dateA.getTime();
    });

    createNode({
      id: createNodeId(`category-${category}`),
      name: category,
      posts: sortedNodes.map((node) => node.id),
      internal: {
        type: `Category`,
        contentDigest: createContentDigest({
          category,
          posts: sortedNodes.map((node) => node.id),
        }),
      },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type Category implements Node {
      id: ID!
      name: String!
      posts: [Mdx!]! @link(by: "id")
    }
  `);
};
