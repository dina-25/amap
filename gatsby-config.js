<<<<<<< HEAD
module.exports = {
  siteMetadata: {
    title: `AMAP GmbH`,
    description: `Der Aluminium-Cluster an der RWTH Aachen University`,
    author: `2021 AMAP GmbH`,
  },
  plugins: [
    {
        resolve: 'gatsby-source-contentful',
        options: {
            spaceId: `5y1ildulrl28`,
            accessToken:`M3qba6e3l_1o2bjTnQJJf_1VRTAF-uo-pk7RXUWK8GU`,
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
                      linkImagesToOriginal: true,
                  },
              },
          ],
      },
    },


    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `AMAP GmbH`,
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
=======

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
            accessToken:`M3qba6e3l_1o2bjTnQJJf_1VRTAF-uo-pk7RXUWK8GU`
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
>>>>>>> 643c2f12ec5ab023112757fc5627ab6e484a77c0
