import React from 'react'
import Layout from '../components/layoutDE'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import projektStyles from '../styles/article.module.scss'

export const data = graphql`
  query Query($slug: String!, $locale: String){
    contentfulAktuelleProjekte(slug: {eq: $slug}, node_locale: {eq: $locale }){
        title
        node_locale
        vorschau{
          json
        }
        image{
          fluid{
            base64
            src
          }
        }
      }
    }
`

const ProjektDetails = (props) => {
    return (
      <Layout>
          <SEO title={props.data.contentfulAktuelleProjekte.title}/>
        <div className={projektStyles.container}>
          <h1 className={projektStyles.titleStyle}>{props.data.contentfulAktuelleProjekte.title}</h1>
          <div className={projektStyles.bodyStyle}>
              <img alt="" src={props.data.contentfulAktuelleProjekte.image.fluid.src} className={projektStyles.imageStyle} />
              <p className={projektStyles.inhaltStyle}>{documentToReactComponents(props.data.contentfulAktuelleProjekte.vorschau.json)} </p>
          </div>
      </div>
      </Layout>
    )
}

export default ProjektDetails
