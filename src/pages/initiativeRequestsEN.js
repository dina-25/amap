import React from 'react'
import SEO from "../components/seo"
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layout'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import ideeStyles from '../styles/idee.module.scss'
import partnerStyles from '../styles/partner.module.scss'

const GefoProjekte = () => {

 const initiativeEn = useStaticQuery(graphql`
    query {
      allContentfulGefohrderteProjekte(filter: {node_locale: {eq: "en"}}) {
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
      <SEO title="Funded Projects with participation of AMAP consortia" />
      <div className={partnerStyles.wrapper}>
        <ol className={partnerStyles.mitgliedern}>
            {initiativeEn.allContentfulGefohrderteProjekte.edges.map((edge) =>{
              return(
                  <li className={ideeStyles.blockStyling}>
                  <a href={edge.node.pdfInfo.file.url}>
                    <img className={ideeStyles.posterStyle} alt="" src={edge.node.poster.fluid.src}/></a>
                      <div className={partnerStyles.clearfix}>
                      <h4 className={ideeStyles.titleStyle}>{edge.node.title}</h4>
                      <p className={partnerStyles.addressStyling}>{documentToReactComponents(edge.node.details.json)}</p>

                    </div>
                    <hr className={ideeStyles.underline}/>
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
