import { MDXProvider } from "@mdx-js/react";
import { PageProps } from "gatsby";

const Layout = ({ children }: PageProps) => {
  return (
    <header>
      <div>이건 헤더여</div>
      <MDXProvider components={{}}>{children}</MDXProvider>
    </header>
  );
};

export default Layout;
