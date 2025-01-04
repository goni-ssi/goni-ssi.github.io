import { Theme } from "@radix-ui/themes";
import { GlobalLayout } from "./src/components/global-layout";
import { ThemeProvider } from "next-themes";
import "./src/styles/global.css";

// global UI 전용 (https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement)
export const wrapPageElement = ({
  element,
  props,
}: {
  element: any;
  props: any;
}) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <ThemeProvider attribute="class">
      <Theme accentColor="indigo" appearance="light">
        <GlobalLayout {...props}>{element}</GlobalLayout>
      </Theme>
    </ThemeProvider>
  );
};

// Provider를 포함한 global 상태 전용 (https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapRootElement)
// export const wrapRootElement = ({ element }) => {
//   return <SomeProvider>{element}</SomeProvider>;
// };
