import { PageProps, graphql } from "gatsby";

const IndexPage = ({ data, location }: PageProps<Queries.IndexPageQuery>) => {
  return <div>메인 페이지</div>;
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;
