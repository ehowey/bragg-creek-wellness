module.exports = {
  siteMetadata: {
    title: `Bragg Creek and Redwood Meadows Wellness Network`,
    description: `The Bragg Creek and Redwood Meadows Wellness Network is a local collaborative that fosters connections and supports activities to promote community wellbeing.`,
    keywords: [
      `bragg creek`,
      `redwood meadows`,
      `wellness`,
      `health`,
      `seniors`,
      `children`,
      `mental health`,
      `adults`,
      `BCAWC`,
      `Bragg Creek and Area Wellness Committee`,
      `committee`,
    ],
    author: `Eric Howey`,
    siteUrl: `https://www.braggcreekwellness.ca`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        //Default options are:
        // contentPath: `content/pages`,
        // assetPath: `content/assets`,
        // displaySiteLogo: true,
        // displaySiteTitle: true,
        // displaySiteLogoMobile: true,
        // displaySiteTitleMobile: true,
        // invertLogo: false,
        // useStickyHeader: false,
        useSocialLinks: false,
        // useColorMode: true,
        footerContentLocation: "center", // "left", "right", "center"
      },
    },
    `gatsby-theme-catalyst-footer`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst-basic`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `content/assets/catalyst-site-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
