import React from 'react'
import SEO from "../../components/seo"
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../../components/layout'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import partnerStyles from '../../styles/partner.module.scss'
import forschungStyle from '../../styles/forschung.module.scss'
import homeStyle from '../../styles/home.module.scss'

const UberUns = () => {

const partnerQuery = useStaticQuery(graphql`
    query {
        allContentfulPublikationen(filter:{node_locale: {eq:"de"}}) {
          edges {
            node {
              publikationen {
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
      <SEO title="Publications" />
      <div className={partnerStyles.wrapper}>
        <h3 className={homeStyle.titleStyling}>Publications</h3>
      {partnerQuery.allContentfulPublikationen.edges.map((edge) => {
        return (
          <p className={forschungStyle.text}>{documentToReactComponents(edge.node.publikationen.json)}</p>
        )
      })}
      </div>
    </Layout>
    </div>
  )
}

export default UberUns
