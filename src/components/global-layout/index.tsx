import { MDXProvider } from "@mdx-js/react";
import { PageProps } from "gatsby";
import { ReactNode } from "react";
import { GlobalFooter } from "../global-footer";
import { GlobalHeader } from "../global-header";
import { containerCss, contentCss } from "./index.css";

type Props = Omit<PageProps, "children"> & {
  children: ReactNode;
};

export const GlobalLayout = ({ children }: Props) => {
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
