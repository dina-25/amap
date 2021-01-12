import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layoutDE"
import SEO from "../components/seo"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import listStyles from '../styles/project.module.scss'
import itemStyles from '../styles/article.module.scss'
import homeStyle from '../styles/home.module.scss'


const ProjectsPage = () => {

  const projQuery = useStaticQuery(graphql`
    query {
      allContentfulAktuelleProjekte(
        sort: {
          fields: slug,
          order: ASC
        }, filter: { node_locale: {eq: "de"}}
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
    <SEO title="Laufende Projekte" />
    <div className={listStyles.wrapper}>
    <h3 className={homeStyle.titleStyling}>Laufende Projekte</h3>
      <ol className={itemStyles.articles}>
        {projQuery.allContentfulAktuelleProjekte.edges.map((edge) => {
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
