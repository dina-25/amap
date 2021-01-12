import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../components/layout'
import {graphql, useStaticQuery} from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import partnerStyles from '../../styles/partner.module.scss'
import homeStyles from '../../styles/home.module.scss'

const Bedingungen = () => {

  const datenSchutzEN = useStaticQuery(graphql`
    query Query {
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
      <h3 className={homeStyles.titleStyling}>Privacy Policy (in German)</h3>
        <p>{documentToReactComponents(datenSchutzEN.contentfulDatenschutz.datenschutz.json)}</p>
      </div>
    </Layout>
    </div>
  )
}

export default Bedingungen
