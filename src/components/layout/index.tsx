import { MDXProvider } from "@mdx-js/react";
import { PageProps } from "gatsby";
import React from "react";

const Layout = ({ children }: PageProps) => {
  return (
    <header>
      <MDXProvider components={{}}>{children}</MDXProvider>
    </header>
  );
};

export default Layout;
