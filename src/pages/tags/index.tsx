import { PageProps, graphql } from 'gatsby';
import { Post } from '../../components/post';
import { SEO } from '../../components/seo';
import { Accordion } from '../../components/accordion';
import { upperFirst } from 'es-toolkit/string';
import { accordionCss } from './index.css';

const TagsPage = ({ data }: PageProps<Queries.TagsPageQuery>) => {
  return (
    <div>
      <Accordion className={accordionCss}>
        {data.allTag.nodes.map((tag) => {
          return (
            <Accordion.Menu key={tag.id} title={`${upperFirst(tag.name)} (${tag.posts.length})`}>
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
