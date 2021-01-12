import React from 'react'
import SEO from "../../components/seo"
import { graphql, useStaticQuery} from 'gatsby'
import Layout from '../../components/layout'
import partnerStyles from '../../styles/partner.module.scss'
import homeStyle from '../../styles/home.module.scss'


const UberUns = () => {

const verbandEn = useStaticQuery(graphql`
    query {
  allContentfulMitgliedschaftInVerbanden(filter:  {node_locale: {eq: "en"}}, sort: {fields: verband}) {
    edges {
      node {
        verband
        address
        poster {
          fluid(quality: 10) {
            base64
            src
          }
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
      <SEO title="Associations" />
      <div className={partnerStyles.wrapper}>
      <h3 className={homeStyle.titleStyling}>Membership in Associations</h3>
      <ol className={partnerStyles.mitgliedern}>

            {verbandEn.allContentfulMitgliedschaftInVerbanden.edges.map((edge) =>{
              return(
                  <li className={partnerStyles.mitglied}>
                    <img className={partnerStyles.verbandPoster} alt="" src={edge.node.poster.fluid.src}/>
                      <div className={partnerStyles.clearfix}>
                      <h4>{edge.node.verband}</h4>
                      <p className={partnerStyles.addressStyling}>{edge.node.address}</p>
                      <a href={edge.node.link}>{edge.node.link}</a>
                    </div>
                    <hr className={partnerStyles.underline}/>
                  </li>
               )
             })}
      </ol>
      </div>
    </Layout>
    </div>
  )
}

export default UberUns
