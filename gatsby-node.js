const path = require('path')
const webpack = require('webpack');


exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
  }) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
          module: {
            rules: [
              {
                test: require.resolve('bootstrap'),
                use: loaders.null(),
              },
              {
                test: require.resolve('wowjs/dist/wow.js'),
                use: loaders.null(),
              },
              {
                test: require.resolve('jquery'),
                use: loaders.null(),
              },
              {
                test: /moduleName/,
                use: loaders.null(),
              },
            ],
          },
        })
      }
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: require.resolve('wowjs/dist/wow.js'),
                    loader: 'exports-loader?this.WOW'
                },
            ],
        },
        plugins: [
            new webpack.ProvidePlugin({
                '$': "jquery",
                'jQuery': "jquery",
                'window.jQuery': 'jquery',
                'Popper': 'popper.js',
                "Bootstrap": "bootstrap.js"
            }),
        ],
    })
  }

exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions
    const res = await graphql(`
      query {
        partnerTemp: allContentfulVollMitgliedsfirmen(filter:{node_locale: {eq: "de"}}){
          edges{
            node{
              mitglieder
              node_locale
              statement{
                json
              }
            }
          }
        }
        partnerTempEN: allContentfulVollMitgliedsfirmen(filter:{node_locale: {eq: "en"}}){
          edges{
            node{
              mitglieder
              node_locale
              statement{
                json
              }
            }
          }
        }
        newsTempl: allContentfulAktuelles(filter:{node_locale: {eq: "de"}}){
          edges{
            node{
              slug
              node_locale
              title
            }
          }
        }
        newsTemplEN: allContentfulAktuelles(filter:{node_locale: {eq: "en"}}){
          edges{
            node{
              slug
              node_locale
              title
            }
          }
        }
      }

      `)

      const partnerTemplate = path.resolve('./src/templates/partnerDetails.js')
      const partnerTemplateEN = path.resolve('./src/templates/partnerDetailsEN.js')
      const newsTemplate = path.resolve('./src/templates/newsTemp.js')
      const newsTemplateEN = path.resolve('./src/templates/newsTempEN.js')

      if(res.errors){
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
      }


      res.data.partnerTemp.edges.forEach((edge) => {
        createPage({
          component: partnerTemplate,
              path: `/partner/${edge.node.mitglieder}`,
              context:{
                mitglieder: edge.node.mitglieder,
          },
        })
      })

      res.data.partnerTempEN.edges.forEach((edge) => {
        createPage({
          component: partnerTemplateEN,
              path: `/en/partner/${edge.node.mitglieder}`,
              context:{
                mitglieder: edge.node.mitglieder,
          },
        })
      })

      res.data.newsTempl.edges.forEach((edge) => {
        createPage({
          component: newsTemplate,
              path: `/aktuelles/${edge.node.slug}`,
              context:{
                slug: edge.node.slug,
          },
        })
      })

      res.data.newsTemplEN.edges.forEach((edge) => {
        createPage({
          component: newsTemplateEN,
              path: `/en/aktuelles/${edge.node.slug}`,
              context:{
                slug: edge.node.slug,
          },
        })
      })
}
