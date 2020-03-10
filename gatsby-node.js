const path = require('path')

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

      if(res.errors){
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
