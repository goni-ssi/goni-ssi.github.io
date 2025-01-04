import { MDXProvider } from "@mdx-js/react";
import { PageProps } from "gatsby";
import { containerCss, contentCss, footerCss, headerCss } from "./index.css";

const Layout = ({ children }: PageProps) => {
  return (
    <div className={containerCss}>
      <header className={headerCss}>
        <div>이건 헤더여</div>
      </header>
      <section className={contentCss}>
        <MDXProvider components={{}}>{children}</MDXProvider>
      </section>
      <footer className={footerCss}>
        <div>이건 푸터야</div>
      </footer>
    </div>
  );
};

export default Layout;
