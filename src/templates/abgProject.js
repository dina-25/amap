import React from 'react'
import Layout from '../components/layoutDE'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import projektStyles from '../styles/article.module.scss'

export const data = graphql`
  query($slug: String!, $locale: String){
    contentfulAbgeschlosseneProjekte(slug: {eq: $slug}, node_locale: {eq: $locale}){
        titel
        node_locale
        slug
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
