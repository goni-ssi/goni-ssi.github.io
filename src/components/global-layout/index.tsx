import { MDXProvider } from "@mdx-js/react";
import { PageProps } from "gatsby";
import { GlobalHeader } from "../global-header";
import { containerCss, contentCss } from "./index.css";
import { GlobalFooter } from "../global-footer";

export const GlobalLayout = ({ children }: PageProps) => {
  return (
    <div className={containerCss}>
      <GlobalHeader />
      <section className={contentCss}>
        <MDXProvider components={{}}>{children}</MDXProvider>
      </section>
      <GlobalFooter />
    </div>
  );
};
