import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import articleStyles from '../styles/article.module.scss'
import newsStyles from '../styles/newsroom.module.scss'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'


const Termine = () => {

   const data = useStaticQuery(graphql`
      query {
        allContentfulColloquiumTermine(sort: {fields: date, order: ASC}, filter:{node_locale: {eq:"en"}}) {
          edges{
            node{
              details {
                  json
                }
                titel
                date(formatString: "DD. MMMM YYYY", locale: "en")
              }
            }
          }

        }

      `)

  return(

    <Layout>
      <SEO title="Appointments" /><div className={newsStyles.wrapper}>
      <ol className={articleStyles.articles}>
        {data.allContentfulColloquiumTermine.edges.map((edge) => {
          return (
            <li className={articleStyles.article}>
            	  <FontAwesomeIcon className={articleStyles.calendarIcon} size="5x" icon={faCalendarAlt}/>
                <h4>{edge.node.titel}</h4>
                <div className={newsStyles.clearfix}>
                  <p className={articleStyles.dateStyling}>{edge.node.date}</p>
                  <p className={newsStyles.postStyleEvent}>{documentToReactComponents(edge.node.details.json)}</p>
                </div>

            </li>
          )
        })}
      </ol>
      </div>
    </Layout>
  )
}

export default Termine
