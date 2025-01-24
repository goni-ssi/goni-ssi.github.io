import remarkGfm from 'remark-gfm';
import type { GatsbyConfig } from 'gatsby';
import 'dotenv/config';
import rehypeMetaAsAttributes from '@lekoarts/rehype-meta-as-attributes';
import { AUTO_LINK_HEADER_CLASS_NAME } from './src/constants/plugins';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Goni Log`,
    description: `곤이의 개발 블로그입니다.`,
    siteUrl: `https://yungo1846.github.io/`,
    image: 'src/images/icon.png',
  },
  graphqlTypegen: true,
  jsxRuntime: 'automatic',
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-vanilla-extract',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_ID],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `60`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: AUTO_LINK_HEADER_CLASS_NAME,
              maintainCase: false,
              removeAccents: true,
              isIconAfterHeader: true,
              elements: [`h1`, `h2`, `h3`],
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
        ],
        mdxOptions: {
          /**
           * GFM(GitHub Flavored Markdown)을 4.0.0 설치시 에러가 발생하여 3버전을 사용합니다.
           * @see https://github.com/contentlayerdev/contentlayer/issues/558#issuecomment-1736215198
           */
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeMetaAsAttributes],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src\/images\/.*\.svg/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/src/contents/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-plugin-pnpm',
  ],
  trailingSlash: 'never',
};

export default config;
