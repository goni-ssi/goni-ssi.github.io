import { MDXProvider } from "@mdx-js/react";
import { PageProps } from "gatsby";
import { ReactNode } from "react";
import { GlobalFooter } from "../global-footer";
import { GlobalHeader } from "../global-header";
import { containerCss, contentCss } from "./index.css";
import {
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
} from "../mdx/headers";

type Props = Omit<PageProps, "children"> & {
  children: ReactNode;
};

export const GlobalLayout = ({ children }: Props) => {
  return (
    <div className={containerCss}>
      <GlobalHeader />
      <section className={contentCss}>
        <MDXProvider
          components={{
            h1: (props) => <Header1 {...props} />,
            h2: (props) => <Header2 {...props} />,
            h3: (props) => <Header3 {...props} />,
            h4: (props) => <Header4 {...props} />,
            h5: (props) => <Header5 {...props} />,
            h6: (props) => <Header6 {...props} />,
          }}
        >
          {children}
        </MDXProvider>
      </section>
      <GlobalFooter />
    </div>
  );
};
