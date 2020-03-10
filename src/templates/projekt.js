import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import projektStyles from '../styles/article.module.scss'

export const data = graphql`
  query($slug: String!){
    contentfulAktuelleProjekte(slug: {eq: $slug}){
        title
        content{
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
              <p className={projektStyles.inhaltStyle}>{documentToReactComponents(props.data.contentfulAktuelleProjekte.content.json)} </p>
          </div>
      </div>
      </Layout>
    )
}

export default ProjektDetails
