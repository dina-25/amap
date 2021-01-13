import React from 'react'
import Layout from '../components/layoutDE'
import SEO from '../components/seo'
import { graphql, navigate} from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import articleStyles from '../styles/article.module.scss'
import homeStyle from '../styles/home.module.scss'
import newsStyles from '../styles/newsroom.module.scss'
import {BLOCKS} from '@contentful/rich-text-types'

export const query = graphql`
query newsTempQuery($slug: String!)  {
    contentfulAktuelles(slug: {eq: $slug}, node_locale: { eq: "de"}){
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
                    de {
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

const options = {
      renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <>
              <img src={node.data.target.fields.file.de.url} alt=""/>
          </>
        )
      },
    },
  }

const NewsDetails = (props) => {



    return (
      <Layout>
         <SEO title={props.data.contentfulAktuelles.slug}/>
         <div className={newsStyles.wrapper}>
         <h3 className={homeStyle.titleStyling}>{props.data.contentfulAktuelles.title}</h3>
         <p>{documentToReactComponents(props.data.contentfulAktuelles.weiterInfo.json,options)}</p>
         <button onClick={() => { navigate(-1) }} className={articleStyles.buttonStyling}>Zurück</button>
     </div>
     </Layout>
    )
}

export default NewsDetails
