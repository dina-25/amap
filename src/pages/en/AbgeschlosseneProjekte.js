import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import listStyles from '../../styles/project.module.scss'
import itemStyles from '../../styles/article.module.scss'
import homeStyle from '../../styles/home.module.scss'


const AbgeschlosseneProjectsPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulAbgeschlosseneProjekte(sort: {
                fields: slug,
                order: ASC
              },filter: {node_locale: {eq: "en"}}){
          edges {
            node {
              titel
              linkPDF {
                file {
                  url
                }
              }
              vorschau {
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
    <SEO title="Finished Projects" />
    <div className={listStyles.wrapper}>
    <h3 className={homeStyle.titleStyling}>Finished Projects</h3>
      <ol className={itemStyles.articles}>
        {data.allContentfulAbgeschlosseneProjekte.edges.map((edge) => {
          return(
            <li className={itemStyles.article}>
                <h4>{edge.node.titel}</h4>
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
