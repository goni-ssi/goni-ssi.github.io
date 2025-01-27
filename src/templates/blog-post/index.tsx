import { MDXProvider } from '@mdx-js/react';
import { Link, PageProps, graphql } from 'gatsby';
import { MdxComponents } from '../../components/mdx';
import { SEO } from '../../components/seo';
import { Button, Heading, Text } from '@radix-ui/themes';
import {
  dateCss,
  headerWrapperCss,
  linkCss,
  nextPostButtonCss,
  postNavigationWrapperCss,
  prevPostButtonCss,
} from './index.css';

type Post = {
  id: string;
  title: string;
  slug: string;
};

type PageContext = {
  id: string;
  prevPost: Post | null;
  nextPost: Post | null;
};

const BlogPost = ({
  data,
  pageContext,
  children,
}: PageProps<Queries.BlogPostTemplateQuery, PageContext>) => {
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

      <div className={postNavigationWrapperCss}>
        {pageContext.prevPost ? (
          <Button className={prevPostButtonCss}>
            <Link
              className={linkCss}
              to={pageContext.prevPost.slug}
            >{`< ${pageContext.prevPost.title}`}</Link>
          </Button>
        ) : (
          <div />
        )}
        {pageContext.nextPost ? (
          <Button className={nextPostButtonCss}>
            <Link
              className={linkCss}
              to={pageContext.nextPost.slug}
            >{`${pageContext.nextPost.title} >`}</Link>
          </Button>
        ) : (
          <div />
        )}
      </div>
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
