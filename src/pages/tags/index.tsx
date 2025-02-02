
import { useLocation } from '@reach/router';
import { upperFirst } from 'es-toolkit/string';
import { PageProps, graphql } from 'gatsby';
import { parse } from 'qs';
import { useRef } from 'react';

import { Accordion } from '@components/accordion';
import { Post } from '@components/post';
import { SEO } from '@components/seo';

import { useIsomorphicLayoutEffect } from '@hooks/use-isomorphic-layout-effect';

import { kebabCaseToSpaceLetter } from '@utils/kebab-case-to-space-letter';

import { accordionCss } from './index.css';

const TagsPage = ({ data }: PageProps<Queries.TagsPageQuery>) => {
  const location = useLocation();
  const targetTagRef = useRef<HTMLDivElement>(null);
  const params = parse(location.search, { ignoreQueryPrefix: true });
  const tagParam = (params?.tag ?? null) as string | null;
  const parsedTagParam = tagParam ? kebabCaseToSpaceLetter(tagParam) : null;

  useIsomorphicLayoutEffect(() => {
    if (targetTagRef.current == null) {
      return;
    }

    targetTagRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [parsedTagParam]);

  return (
    <div>
      <Accordion className={accordionCss}>
        {data.allTag.nodes.map((tag) => {
          const selectedByParam = tag.name === parsedTagParam;

          return (
            <Accordion.Menu
              key={tag.id}
              ref={selectedByParam ? targetTagRef : null}
              title={`${upperFirst(tag.name)} (${tag.posts.length})`}
              open={selectedByParam}
            >
              <Post.List>
                {tag.posts.map((post) => {
                  return (
                    <Accordion.MenuItem key={post.id}>
                      <Post.Item node={post} />
                    </Accordion.MenuItem>
                  );
                })}
              </Post.List>
            </Accordion.Menu>
          );
        })}
      </Accordion>
    </div>
  );
};

export default TagsPage;

export const Head = () => {
  return <SEO title="Tags" />;
};

export const pageQuery = graphql`
  query TagsPage {
    allTag {
      nodes {
        id
        name
        posts {
          id
          fields {
            slug
            readingTime
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            description
          }
        }
      }
    }
  }
`;
