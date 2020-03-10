import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import listStyles from '../styles/newsroom.module.scss'
import itemStyles from '../styles/article.module.scss'

const AbgeschlosseneProjectsPage = () => {

  const projQuery = useStaticQuery(graphql`
    query {
  allContentfulAbgeschlosseneProjekte(
    filter:{
      node_locale:{
        eq: "de"
      }
    }){
    edges {
      node {
        titel
        vorschau {
          json
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
        {projQuery.allContentfulAbgeschlosseneProjekte.edges.map((edge) => {
          return(
            <li className={itemStyles.article}>
              <Link to={`/AbgeschlosseneProjekte/${edge.node.slug}`}>
                <h2>{edge.node.titel}</h2>
                <div className={listStyles.clearfix}>
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

export default AbgeschlosseneProjectsPage
