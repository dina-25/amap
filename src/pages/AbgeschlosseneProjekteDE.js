import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layoutDE"
import SEO from "../components/seo"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import listStyles from '../styles/project.module.scss'
import itemStyles from '../styles/article.module.scss'

const AbgeschlosseneProjectsPage = () => {

  const projDEQuery = useStaticQuery(graphql`
    query {
      allContentfulAbgeschlosseneProjekte(sort: {
                fields: projNumber,
                order: ASC
              },filter: {node_locale: {eq: "de"}}){
          edges {
            node {
              titel
              linkPDF{
                file{
                  url
                }
              }
               vorschau{
                 json
               }
              image {
                fluid {
                  base64
                  src
                }
              }
            }
          }
        }
      }
    `)

return (
  <Layout>
    <SEO title="Abgeschlossene Projekte" />
    <div className={listStyles.wrapper}>
      <ol className={itemStyles.articles}>
        {projDEQuery.allContentfulAbgeschlosseneProjekte.edges.map((edge) => {
          return(
            <li className={itemStyles.article}>

                <h2>{edge.node.titel}</h2>
                <div className={listStyles.clearfix}>
                <a href={edge.node.linkPDF.file.url}>
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

export default AbgeschlosseneProjectsPage
