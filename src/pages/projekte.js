import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import listStyles from '../styles/newsroom.module.scss'
import itemStyles from '../styles/article.module.scss'

const ProjectsPage = () => {

  const projQuery = useStaticQuery(graphql`
    query {
      allContentfulAktuelleProjekte(
        sort: {
          fields: title,
          order: ASC
        }
         filter:{
           node_locale:{
             eq: "de"
           }
         }
         ){
        edges {
          node {
            title
            slug
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
    <SEO title="Projekte" />
    <div className={listStyles.wrapper}>
      <ol className={itemStyles.articles}>
        {projQuery.allContentfulAktuelleProjekte.edges.map((edge) => {
          return(
            <li className={itemStyles.article}>
              <Link to={`/projekte/${edge.node.slug}`}>
                <h4>{edge.node.title}</h4>
                <div className={listStyles.clearfix}>
                  <img alt="" className={listStyles.postImgStyle} src={edge.node.image.fluid.src} />
                  <p className={listStyles.postStyle}>{documentToReactComponents(edge.node.vorschau.json)}</p>
                </div>
              </Link>
            </li>
           )
         })}
      </ol>
    </div>
  </Layout>
 )
}

export default ProjectsPage
