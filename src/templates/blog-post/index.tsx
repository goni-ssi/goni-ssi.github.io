
import { MDXProvider } from '@mdx-js/react';
import { Badge, Button, Heading, Text } from '@radix-ui/themes';
import { kebabCase, upperFirst } from 'es-toolkit/string';
import { Link, PageProps, graphql } from 'gatsby';

import { MdxComponents } from '@components/mdx';
import { SEO } from '@components/seo';

import DirectionIcon from '@images/icons/direction.svg';

import {
  badgeCss,
  badgeWrapperCss,
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
  const hasReadingTime = mdx.fields?.readingTime != null;

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
            <time>{frontmatter?.date}</time>
            {hasReadingTime ? <span> &mdash; {mdx.fields?.readingTime}</span> : null}
          </Text>
        )}
        <div className={badgeWrapperCss}>
          {mdx.frontmatter?.tags?.map((tag) => {
            return (
              <Link key={tag} to={`/tags?tag=${kebabCase(tag)}`}>
                <Badge className={badgeCss}>{upperFirst(tag)}</Badge>
              </Link>
            );
          })}
        </div>
      </div>
      <MDXProvider components={MdxComponents}>{children}</MDXProvider>

      <div className={postNavigationWrapperCss}>
        {pageContext.prevPost ? (
          <Button className={prevPostButtonCss}>
            <Link className={linkCss} to={pageContext.prevPost.slug}>
              <DirectionIcon width={18} height={18} />
              <span>{pageContext.prevPost.title}</span>
            </Link>
          </Button>
        ) : (
          <div />
        )}
        {pageContext.nextPost ? (
          <Button className={nextPostButtonCss}>
            <Link className={linkCss} to={pageContext.nextPost.slug}>
              {pageContext.nextPost.title}
              <DirectionIcon width={18} height={18} />
            </Link>
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
        tags
      }
      fields {
        readingTime
      }
      body
    }
  }
`;
