import { MDXProvider } from '@mdx-js/react';
import { PageProps, graphql } from 'gatsby';
import { MdxComponents } from '../../mdx';

const BlogPost = ({ data, children }: PageProps<Queries.BlogPostTemplateQuery>) => {
  const { mdx } = data;

  if (mdx == null) {
    return null;
  }

  const { frontmatter } = mdx;

  return (
    <>
      {frontmatter?.title == null ? null : <h1>{frontmatter.title}</h1>}
      {frontmatter?.date == null ? null : <p>{frontmatter?.date}</p>}
      <MDXProvider components={MdxComponents}>{children}</MDXProvider>
    </>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostTemplate($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`;
