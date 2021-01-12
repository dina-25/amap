import React from 'react'
import Layout from '../components/layoutAktuelles'
import SEO from '../components/seo'
import { graphql, navigate} from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import articleStyles from '../styles/article.module.scss'
import homeStyle from '../styles/home.module.scss'
import newsStyles from '../styles/newsroom.module.scss'
import {BLOCKS} from '@contentful/rich-text-types'

export const query = graphql`
query newsTempQueryEN($slug: String!)  {
    contentfulAktuelles(slug: {eq: $slug}, node_locale: { eq: "en"}){
        slug
        node_locale
        title
        teaser {
          fluid{
            src
          }
        }
          weiterInfo {
            content {
                data {
                  target {
                    fields {
                      file {
                        en {
                          url
                        }
                      }
                    }
                  }
                }
              }
          json
        }
      }
    }
`
const option = {
  renderNode: {
  [BLOCKS.EMBEDDED_ASSET]: node => {
    return (
      <>
          <img src={node.data.target.fields.file.en.url} alt=""/>
      </>
    )
  },
},
}

const NewsDetailsEN = (props) => {

    return (
      <Layout>
          <SEO title={props.data.contentfulAktuelles.slug}/>
            <div className={newsStyles.wrapper}>
              <h3 className={homeStyle.titleStyling}>{props.data.contentfulAktuelles.title}</h3>
              <p>{documentToReactComponents(props.data.contentfulAktuelles.weiterInfo.json,option)}</p>
              <button onClick={() => { navigate(-1) }} className={articleStyles.buttonStyling}>Back</button>
            </div>
      </Layout>
    )
}

export default NewsDetailsEN
