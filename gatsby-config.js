require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "AVIILA - Men's Activewear",
    siteTitleDefault: "AVIILA - Men's Activewear",
    siteUrl: "https://aviila.com",
    hrefLang: "en",
    siteDescription:
      "AVIILA is a Miami-based premium men's activewear clothing company.",
    siteImage: "/static/images/logos/AVIILA-4.png",
    twitter: "@aviila_apparel",
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AVIILA | Miami-Based Men's Activewear`,
        short_name: `AVIILA`,
        start_url: `/outline`,
        background_color: `#0C0C0E`,
        theme_color: `#0C0C0E`,
        display: `standalone`,
        icon: `src/images/aviila_icon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `bv5d69d22y29`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/images\/svg/,
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
  ].filter(Boolean),
}
