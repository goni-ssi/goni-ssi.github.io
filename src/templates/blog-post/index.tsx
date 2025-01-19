import { MDXProvider } from '@mdx-js/react';
import { PageProps, graphql } from 'gatsby';
import { MdxComponents } from '../../components/mdx';
import { SEO } from '../../components/seo';

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

export const Head = ({ data }: PageProps<Queries.BlogPostTemplateQuery>) => {
  return <SEO title={data.mdx?.frontmatter?.title ?? 'Post'} />;
};

export default BlogPost;

export const pageQuery = graphql`
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
