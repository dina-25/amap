import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layout'
import bodyStyling from '../styles/home.module.scss'
import SEO from '../components/seo'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

const Impressum = () => {

 const impressum = useStaticQuery(graphql`
         query {
           contentfulImpressum {
              impressum {
                json
              }
            }
         }
       `)

  return (
    <div>
      <Layout>
      <SEO title="Impressum" />
        <div className={bodyStyling.bodyWidth}>
          <p>{documentToReactComponents(impressum.contentfulImpressum.impressum.json)}</p>
        </div>
      </Layout>
    </div>
  )
}

export default Impressum
