import React from 'react'
import SEO from "../components/seo"
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layoutDE'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import partnerStyles from '../styles/partner.module.scss'
import homeStyle from '../styles/home.module.scss'

const GefoProjekte = () => {

const seedFundEN = useStaticQuery(graphql`
    query {
      allContentfulSeedFund(filter: {node_locale: {eq: "de"}}) {
        edges {
          node {
            intro{
              json
            }
            projThemen{
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
      <SEO title="AMAP Seed Funding Pool" />
      <div className={partnerStyles.wrapper}>
          <h3 className={homeStyle.titleStyling}>AMAP Seed Funding Pool</h3>
            {seedFundEN.allContentfulSeedFund.edges.map((edge) =>{
              return(

                    <div className={partnerStyles.clearfix}>
                      <p className={partnerStyles.addressStyling}>{documentToReactComponents(edge.node.intro.json)}</p>
                      <p className={partnerStyles.addressStyling}>{documentToReactComponents(edge.node.projThemen.json)}</p>
                    </div>

               )
             })}
      </div>
    </Layout>
    </div>
  )
}

export default GefoProjekte
