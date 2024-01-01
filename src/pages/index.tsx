import { PageProps, graphql } from "gatsby";
import * as React from "react";

const IndexPage = ({
  data,
  location,
  pageContext,
}: PageProps<Queries.IndexPageQuery>) => {
  return <div>hi</div>;
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
