import React from 'react'
import SEO from "../components/seo"
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layoutDE'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import ideeStyles from '../styles/idee.module.scss'
import partnerStyles from '../styles/partner.module.scss'
import homeStyle from '../styles/home.module.scss'

const GefoProjekte = () => {

const partnerQuery = useStaticQuery(graphql`
    query {
      allContentfulGefohrderteProjekte(filter: {node_locale: {eq: "de"}}) {
        edges {
          node {
            pdfInfo{
              file{
                url
              }
            }
            poster {
              fluid(quality: 10) {
                base64
                src
              }
            }
            title
            details {
              json
            }
          }
        }
      }
    }
  `)


  return (
    <div>
    <Layout>
      <SEO title="Gefördete Projekte mit Teilnahme con AMAP Konsortien" />
      <div className={partnerStyles.wrapper}>
        <h3 className={homeStyle.titleStyling}>Gefördete Projekte mit Teilnahme con AMAP Konsortien</h3>
        <ol className={partnerStyles.mitgliedern}>
            {partnerQuery.allContentfulGefohrderteProjekte.edges.map((edge) =>{
              return(
                  <li className={ideeStyles.blockStyling}>
                  <a href={edge.node.pdfInfo.file.url}>
                    <img className={ideeStyles.posterStyle} alt="" src={edge.node.poster.fluid.src}/></a>
                      <div className={partnerStyles.clearfix}>
                      <h4 className={ideeStyles.titleStyle}>{edge.node.title}</h4>
                      <p className={ideeStyles.blockStyling}>{documentToReactComponents(edge.node.details.json)}</p>
                      <hr className={ideeStyles.underline}/>
                    </div>

                  </li>
               )
             })}
        </ol>
      </div>
    </Layout>
    </div>
  )
}

export default GefoProjekte
