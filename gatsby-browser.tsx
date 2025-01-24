/* eslint-disable react-hooks/rules-of-hooks */
import { Theme } from '@radix-ui/themes';
import { PageProps } from 'gatsby';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { GlobalLayout } from './src/components/global-layout';
import './src/styles/global.css';
import './src/styles/prism-js.css';
import { gatsbyRootThemeCss } from './src/components/global-layout/index.css';

// global UI 전용 (https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement)
export const wrapPageElement = ({ element, props }: { element: ReactNode; props: PageProps }) => {
  return (
    <ThemeProvider attribute="class" storageKey="theme">
      <Theme accentColor="indigo" grayColor="gray" className={gatsbyRootThemeCss}>
        <GlobalLayout {...props}>{element}</GlobalLayout>
      </Theme>
    </ThemeProvider>
  );
};

/**
 * @note
 * `gatsby-remark-autolink-headers`의 링크를 클릭할 경우 스크롤을 이동하지 않도록 설정하기 위해 오버라이드 합니다.
 * @see https://github.com/gatsbyjs/gatsby/blob/aa403a4145286782d0989462f9bf3bb1525bc2e3/packages/gatsby-remark-autolink-headers/src/gatsby-browser.js#L45
 */
export const shouldUpdateScroll = () => {
  return false;
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
