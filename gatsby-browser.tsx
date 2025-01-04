/* eslint-disable react-hooks/rules-of-hooks */
import { Theme } from "@radix-ui/themes";
import { PageProps } from "gatsby";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { GlobalLayout } from "./src/components/global-layout";
import {
  ColorPreferenceProvider,
  useColorPreference,
} from "./src/hooks/use-color-preference";
import "./src/styles/global.css";

// global UI 전용 (https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement)
export const wrapPageElement = ({
  element,
  props,
}: {
  element: ReactNode;
  props: PageProps;
}) => {
  const { colorPreference } = useColorPreference();

  return (
    <ThemeProvider attribute="class">
      <Theme accentColor="indigo" appearance={colorPreference}>
        <GlobalLayout {...props}>{element}</GlobalLayout>
      </Theme>
    </ThemeProvider>
  );
};

// Provider를 포함한 global 상태 전용 (https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapRootElement)
export const wrapRootElement = ({ element }: { element: ReactNode }) => {
  return <ColorPreferenceProvider>{element}</ColorPreferenceProvider>;
};
