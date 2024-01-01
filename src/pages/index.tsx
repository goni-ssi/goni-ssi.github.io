import { PageProps, graphql } from "gatsby";
import * as React from "react";

const IndexPage = ({ data, location }: PageProps<Queries.IndexPageQuery>) => {
  console.log("data", data);
  console.log("location", location);
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
  }
`;
