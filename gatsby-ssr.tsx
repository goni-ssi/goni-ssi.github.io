import { GlobalLayout } from "./src/components/global-layout";

// global UI 전용 (https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#wrapPageElement)
export const wrapPageElement = ({
  element,
  props,
}: {
  element: any;
  props: any;
}) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <GlobalLayout {...props}>{element}</GlobalLayout>;
};

// Provider를 포함한 global 상태 전용 (https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#wrapRootElement)
// export const wrapRootElement = ({ element }) => {
//   return <SomeProvider>{element}</SomeProvider>;
// };
