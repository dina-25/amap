import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layoutDE'
import { graphql, useStaticQuery, Link } from 'gatsby'
import partnerStyles from '../styles/partner.module.scss'
import listStyles from '../styles/project.module.scss'
import articleStyles from '../styles/article.module.scss'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {MDBIcon } from 'mdbreact'
import homeStyle from '../styles/home.module.scss'

const Bedingungen = () => {

  const newsQuery = useStaticQuery(graphql`
    query NewsPageQuery {
       allContentfulAktuelles(filter: {node_locale: {eq: "de"}}) {
         edges {
           node {
             slug
             inhalt {
               json
             }
             title
             teaser {
               fluid {
                 src
               }
             }
           }
         }
       }
     }
  `)

  return (

    <div>
    <Layout>
      <SEO title="Aktuelles" />

      <div className={partnerStyles.wrapper}>
        <ol className={articleStyles.articles}>
        {newsQuery.allContentfulAktuelles.edges.map((edge) => {
          return(
            <li>
              <h4 lang="de-DE" className={homeStyle.titleStyling}>{edge.node.title}</h4>
              <div className={listStyles.clearfix}>
                <img alt="" className={listStyles.postImgStyle} src={edge.node.teaser.fluid.src} />
                <p lang="de" className={listStyles.postStyle}>
                {documentToReactComponents(edge.node.inhalt.json)}</p>

                <Link to={edge.node.slug} className='black-text d-flex justify-content-end'>
                  <h5>
                    Read more
                    <MDBIcon icon='angle-double-right' className='ml-2' />
                  </h5>
                  </Link>
              </div>
            </li>
            )})}

            </ol>
          </div>
      </Layout>
      </div>
      
    )
  }

export default Bedingungen
