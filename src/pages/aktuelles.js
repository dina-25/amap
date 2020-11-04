import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'
import partnerStyles from '../styles/partner.module.scss'



const Bedingungen = () => {

  return (
    <div>
    <Layout>
      <SEO title="Aktuelles" />
      <div className={partnerStyles.wrapper}>
      </div>
    </Layout>
    </div>
  )
}

export default Bedingungen
