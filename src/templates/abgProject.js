import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import projektStyles from '../styles/article.module.scss'

export const data = graphql`
  query($slug: String!){
    contentfulAbgeschlosseneProjekte(slug: {eq: $slug}){
        titel

      }
    }
`

const FinischedProjektDetails = (props) => {
    return (
      <Layout>
          <SEO title={props.data.contentfulAbgeschlosseneProjekte.title}/>
        <div className={projektStyles.container}>
          <h1 className={projektStyles.titleStyle}>{props.data.contentfulAbgeschlosseneProjekte.titel}</h1>
          <div className={projektStyles.bodyStyle}>
          </div>
      </div>
      </Layout>
    )
}

export default FinischedProjektDetails
