import type { GatsbyConfig } from "gatsby";
import "dotenv/config";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Goni Log`,
    siteUrl: `https://yungo1846.github.io/`,
  },
  graphqlTypegen: true,
  jsxRuntime: "automatic",
  plugins: [
    "gatsby-plugin-vanilla-extract",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_ID],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },

    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/images\/.*\.svg/,
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-pnpm",
  ],
};

export default config;
