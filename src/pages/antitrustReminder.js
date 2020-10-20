import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/layout'
import partnerStyles from '../styles/partner.module.scss'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

const Bedingungen = () => {

  const trust = useStaticQuery(graphql`
    query  {
      contentfulAntitrustReminder {
        antitrustReminder {
          json
        }
      }
    }
  `)

  return (
    <div>
    <Layout>
      <SEO title="Antitrust Reminder" />
      <div className={partnerStyles.wrapper}>
        {documentToReactComponents(trust.contentfulAntitrustReminder.antitrustReminder.json)}
      </div>
    </Layout>
    </div>
  )
}

export default Bedingungen
