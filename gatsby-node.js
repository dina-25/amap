const path = require('path')

exports.onCreateWebpackConfig = ({ stage, loaders,actions }) => {

    actions.setWebpackConfig({
      node: {
        fs: 'empty',
        net: 'empty'
      }

    })
  }

exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions
    const res = await graphql(`
      query {
        article:  allContentfulPresseArticle{
                      edges {
                        node {
                          slug
                        }
                      }
                    }

          project:  allContentfulAktuelleProjekte{
              edges{
                node{
                  slug
                }
              }
            }

        finishedProj: allContentfulAbgeschlosseneProjekte{
                edges{
                  node{
                    slug
                  }
                }
              }
        }

      `)

      const articleTemplate = path.resolve('./src/templates/article.js')
      const projectTemplate = path.resolve('./src/templates/projekt.js')
      const abgProjectTemplate = path.resolve('./src/templates/abgProject.js')
    //  const newsAktuelles = path.resolve('./src/component/card.js')

      if(res.errors){
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
      }

      res.data.article.edges.forEach((edge) => {
        createPage({
          path: `/newsroom/${edge.node.slug}`,
          component: articleTemplate,
          context: {
            slug:  edge.node.slug
          }
        })
      })

      res.data.project.edges.forEach((edge) => {
        createPage ({
          component: projectTemplate,
          path: `/projekte/${edge.node.slug}`,
          context: {
            slug: edge.node.slug
          },
        })
      })

      res.data.finishedProj.edges.forEach((edge) =>{
        createPage ({
          component: abgProjectTemplate,
          path: `/AbgeschlosseneProjekte/${edge.node.slug}`,
          context: {
            slug: edge.node.slug
          },
        })
      })
}
