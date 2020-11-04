import React from 'react'
import Layout from '../components/layoutDE'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import articleStyles from '../styles/article.module.scss'

export const query = graphql`
query ArticleQuery($slug: String!, $locale: String)  {
    contentfulPresseArticle(slug: {eq: $slug}, node_locale: { eq: $locale }){
        title
        slug
        node_locale
        vorschau {
          json
        }
        poster{
          file{
            url
          }
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

const Article = (props) => {

    return (
      <Layout>
          <SEO title={props.data.contentfulPresseArticle.title}/>
        <div className={articleStyles.container}>
          <h1 className={articleStyles.titleStyle}>{props.data.contentfulPresseArticle.title}</h1>
          <div className={articleStyles.bodyStyle}>
              <img alt="" src={props.data.contentfulPresseArticle.image.fluid.src} className={articleStyles.imageStyle} />
              <p className={articleStyles.inhaltStyle}>{documentToReactComponents(props.data.contentfulPresseArticle.vorschau.json)} </p>
              <a href={props.data.contentfulPresseArticle.poster.file.url}>Weiter lesen</a>
          </div>
      </div>
      </Layout>
    )
}

export default Article
