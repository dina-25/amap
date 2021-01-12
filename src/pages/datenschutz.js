import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layoutDE'
import {graphql, useStaticQuery} from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import partnerStyles from '../styles/partner.module.scss'
import homeStyles from '../styles/home.module.scss'

const Bedingungen = () => {

  const datenSchutz = useStaticQuery(graphql`
    query MyQuery {
      contentfulDatenschutz {
            datenschutz {
              json
            }
          }
        }
  `)

  return (
    <div>
    <Layout>
      <SEO title="Datenschutz" />
      <div className={partnerStyles.wrapper}>
            <h3 className={homeStyles.titleStyling}>Datenschutzklärung</h3>
        <p>{documentToReactComponents(datenSchutz.contentfulDatenschutz.datenschutz.json)}</p>
      </div>
    </Layout>
    </div>
  )
}

export default Bedingungen
