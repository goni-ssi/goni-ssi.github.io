import { PageProps, graphql } from 'gatsby';
import { Post } from '../../components/post';
import { SEO } from '../../components/seo';
import { Accordion } from '../../components/accordion';
import { upperFirst } from 'es-toolkit/string';
import { accordionCss } from './index.css';

const CategoriesPage = ({ data }: PageProps<Queries.CategoriesPageQuery>) => {
  return (
    <div>
      <Accordion className={accordionCss}>
        {data.allCategory.nodes.map((category) => {
          return (
            <Accordion.Menu
              key={category.id}
              title={`${upperFirst(category.name)} (${category.posts.length})`}
            >
              <Post.List>
                {category.posts.map((post) => {
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

export default CategoriesPage;

export const Head = () => {
  return <SEO title="Categories" />;
};

export const pageQuery = graphql`
  query CategoriesPage {
    allCategory {
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
