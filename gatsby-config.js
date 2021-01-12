
module.exports = {

  siteMetadata: {
    title: `AMAP GmbH`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `2020 AMAP GmbH`,
  },
  plugins: [
    {
        resolve: 'gatsby-source-contentful',
        options: {
            spaceId: `5y1ildulrl28`,
            accessToken:`S-6IkBOVQtxXOmqUOeUonFAhZn0TWrv_TGx_I7qXUME`
        },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
              'gatsby-remark-images-contentful',
              {
                  resolve: 'gatsby-remark-images',
                  options: {
                      maxWidth: 1200,
                      quality: 100,
                      linkImagesToOriginal: true
                  }
              }
          ]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AMAP GmbH`,
        short_name: `AMAP`,
        start_url: `/`,
        background_color: `#0072bc`,
        theme_color: `#0072bc`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     `gatsby-plugin-offline`,

  ],

  pathPrefix: "/amap"
}
