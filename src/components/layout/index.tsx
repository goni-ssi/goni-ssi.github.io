import { MDXProvider } from "@mdx-js/react";
import { PageProps } from "gatsby";

const Layout = ({ children }: PageProps) => {
  return (
    <header>
      <MDXProvider components={{}}>{children}</MDXProvider>
    </header>
  );
};

export default Layout;
