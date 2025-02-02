import { PageProps, graphql } from 'gatsby';
import { Post } from '@components/post';
import { SEO } from '@components/seo';

const PostsPage = ({ data }: PageProps<Queries.PostsPageQuery>) => {
  return (
    <div>
      <Post.List>
        {data.allMdx.nodes.map((node) => {
          return <Post.Item key={node.id} node={node} />;
        })}
      </Post.List>
    </div>
  );
};

export default PostsPage;

export const Head = () => {
  return <SEO title="Posts" />;
};

export const pageQuery = graphql`
  query PostsPage {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
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
`;
