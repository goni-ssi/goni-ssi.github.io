/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/rules-of-hooks */
import { PageProps, RenderBodyArgs } from "gatsby";
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

export const onRenderBody = ({ setHeadComponents }: RenderBodyArgs) => {
  setHeadComponents([
    <link key="font-1" rel="preconnect" href="https://fonts.googleapis.com" />,
    <link
      key="font-2"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      // @ts-ignore
      crossorigin
    />,
    <link
      key="font-3"
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap"
      rel="stylesheet"
    />,
  ]);
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
