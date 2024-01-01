import { graphql } from "gatsby";

const Template = () => {
  return (
    <div>
      <h1>Template</h1>
    </div>
  );
};

export default Template;

export const Head = () => <title>Template</title>;

export const query = graphql`
  query Template {
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
