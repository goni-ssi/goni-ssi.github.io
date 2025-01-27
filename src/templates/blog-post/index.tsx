import { MDXProvider } from '@mdx-js/react';
import { PageProps, graphql } from 'gatsby';
import { MdxComponents } from '../../components/mdx';
import { SEO } from '../../components/seo';
import { Heading, Text } from '@radix-ui/themes';
import { dateCss, headerWrapperCss } from './index.css';

const BlogPost = ({ data, children }: PageProps<Queries.BlogPostTemplateQuery>) => {
  const { mdx } = data;

  if (mdx == null) {
    return null;
  }

  const { frontmatter } = mdx;

  return (
    <>
      <div className={headerWrapperCss}>
        {frontmatter?.title == null ? null : (
          <Heading as="h1" size="8">
            {frontmatter.title}
          </Heading>
        )}
        {frontmatter?.date == null ? null : (
          <Text as="p" size="2" className={dateCss}>
            {frontmatter?.date}
          </Text>
        )}
      </div>
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
