/* eslint-disable react-hooks/rules-of-hooks */
import { PageProps } from "gatsby";
import { ReactNode } from "react";
import { GlobalLayout } from "./src/components/global-layout";

import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import "./src/styles/global.css";

// global UI 전용 (https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#wrapPageElement)
export const wrapPageElement = ({
  element,
  props,
}: {
  element: ReactNode;
  props: PageProps;
}) => {
  return (
    <ThemeProvider attribute="class" storageKey="theme">
      <Theme accentColor="indigo">
        <GlobalLayout {...props}>{element}</GlobalLayout>
      </Theme>
    </ThemeProvider>
  );
};

// Provider를 포함한 global 상태 전용 (https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapRootElement)
// export const wrapRootElement = ({
//   element,
// }: {
//   pathname: string;
//   element: ReactNode;
// }) => {
//   return <SomeProvider>{element}</SomeProvider>;
// };
