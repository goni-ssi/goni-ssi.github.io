import remarkGfm from 'remark-gfm';
import type { GatsbyConfig } from 'gatsby';
import 'dotenv/config';
import rehypeMetaAsAttributes from '@lekoarts/rehype-meta-as-attributes';

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
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          // {
          //   resolve: `gatsby-remark-prismjs`,
          //   options: {
          //     classPrefix: 'language-',
          //     inlineCodeMarker: null,
          //     aliases: {},
          //     showLineNumbers: true,
          //     noInlineHighlight: true,
          //     languageExtensions: [
          //       {
          //         language: 'superscript',
          //         extend: 'javascript',
          //         definition: {
          //           superscript_types: /(SuperType)/,
          //         },
          //         insertBefore: {
          //           function: {
          //             superscript_keywords: /(superif|superelse)/,
          //           },
          //         },
          //       },
          //     ],
          //     prompt: {
          //       user: 'root',
          //       host: 'localhost',
          //       global: false,
          //     },
          //     escapeEntities: {},
          //   },
          // },
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
