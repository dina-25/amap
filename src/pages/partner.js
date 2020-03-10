import React from 'react'
import SEO from "../components/seo"
import {Link, graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layout'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import partnerStyles from '../styles/partner.module.scss'



const Partners = () => {
  const partnerQuery = useStaticQuery(graphql`
  query {
    allContentfulVollMitgliedsfirmen
      {
    edges {
      node {
        mitglieder
        poster {
          fluid {
            base64
            src
          }
        }
        adress{
          json
        }
        link
      }
    }
  }
}

    `)

  return (
    <div>
    <Layout>
      <SEO title="Unser Partner" />
      <div className={partnerStyles.wrapper}>
        <ol className={partnerStyles.mitgliedern}>
              <li className={partnerStyles.mitglied}>

              {partnerQuery.allContentfulVollMitgliedsfirmen.edges.map((edge) =>{
                return(
                  <div className={partnerStyles.clearfix}>
                    <p className={partnerStyles.titleStyling}>{edge.node.mitglieder}</p>
                    <img className={partnerStyles.postImgStyle} alt="" src={edge.node.poster.src} />
                    <address className={partnerStyles.addressStyling}>{documentToReactComponents(edge.node.adress.json)}</address>
                    <Link>{edge.node.link}</Link>
                  </div>
                 )
               })}

              </li>

        </ol>
      </div>
    </Layout>
    </div>
  )
}

export default Partners
