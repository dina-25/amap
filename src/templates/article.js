import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import articleStyles from '../styles/article.module.scss'

export const query = graphql`
query($slug: String!)  {
    contentfulPresseArticle(slug: {eq: $slug}){
        title
        publichedDate(formatString: "Do MMMM, YYYY")
        inhalt {
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

const Article = (props) => {

    return (
      <Layout>
          <SEO title={props.data.contentfulPresseArticle.title}/>
        <div className={articleStyles.container}>
          <h1 className={articleStyles.titleStyle}>{props.data.contentfulPresseArticle.title}</h1>
          <p className={articleStyles.dateStyle}>{props.data.contentfulPresseArticle.publichedDate}</p>
          <div className={articleStyles.bodyStyle}>
              <img alt="" src={props.data.contentfulPresseArticle.image.fluid.src} className={articleStyles.imageStyle} />
              <p className={articleStyles.inhaltStyle}>{documentToReactComponents(props.data.contentfulPresseArticle.inhalt.json)} </p>
          </div>
      </div>
      </Layout>
    )
}

export default Article
