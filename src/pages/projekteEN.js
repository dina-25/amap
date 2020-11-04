import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import listStyles from '../styles/project.module.scss'
import itemStyles from '../styles/article.module.scss'


const ProjectsPage = () => {

  const projQueryEn = useStaticQuery(graphql`
    query {
      allContentfulAktuelleProjekte(
        sort: {
          fields: title,
          order: ASC
        }, filter: { node_locale: {eq: "en"}}
         ){
        edges {
          node {
            title
            slug
            poster{
              file{
                url
              }
            }
            image{
              fluid{
                  src
                  base64
              }
            }
            vorschau{
              json
            }
          }
        }
      }
    }

    `)

return (
  <Layout>
    <SEO title="Current Projects" />
    <div className={listStyles.wrapper}>
      <ol className={itemStyles.articles}>
        {projQueryEn.allContentfulAktuelleProjekte.edges.map((edge) => {
          return(
            <li className={itemStyles.article}>
                <h4>{edge.node.title}</h4>
                <div className={listStyles.clearfix}>
                  <a href={edge.node.poster.file.url}>
                  <img alt="" className={listStyles.postImgStyle} src={edge.node.image.fluid.src} /></a>
                  <p className={listStyles.postStyle}>{documentToReactComponents(edge.node.vorschau.json)}</p>
                </div>
            </li>
           )
         })}
      </ol>
    </div>
  </Layout>
 )
}

export default ProjectsPage
