import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/layoutDE'

import partnerStyles from '../styles/partner.module.scss'

const Bedingungen = () => {

  const trust = useStaticQuery(graphql`
    query  {
        contentfulAsset(title: {eq: "AntiTrustReminder"}) {
          fluid(quality: 10) {
            base64
            src
          }
        }
      }
  `)

  return (
    <div>
    <Layout>
      <SEO title="Antitrust Reminder" />
      <div className={partnerStyles.wrapper}>
          <img src={trust.contentfulAsset.fluid.src} className={partnerStyles.imageStyle} alt="" width="80%"/>
      </div>
    </Layout>
    </div>
  )
}

export default Bedingungen
