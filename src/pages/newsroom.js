import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import articleStyles from '../styles/article.module.scss'
import newsStyles from '../styles/newsroom.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Newsroom = () => {

  const data = useStaticQuery(graphql`
    query {
        allContentfulPresseArticle(
                  sort: {
                      fields: publichedDate,
                      order: DESC
                    }
                  filter: {
                    node_locale: {
                      eq: "de"
                    }
                  }
                  ){
                    edges {
                      node {
                        title
                        slug
                        publichedDate(formatString: "Do MMMM, YYYY")
                        vorschau{
                          json
                            }
                        image{
                          fluid{
                            src
                          }
                        }
                          }
                        }
                      }
                    }


    `)

  return (

      <Layout>
      <SEO title="Newsroom" />
      <div className={newsStyles.wrapper}>
      <ol className={articleStyles.articles}>
        {data.allContentfulPresseArticle.edges.map((edge) => {
          return (
            <li className={articleStyles.article}>
              <Link to={`/newsroom/${edge.node.slug}`}>
                <h4>{edge.node.title}</h4>
                <p>{edge.node.publischedDate}</p>
                <div className={newsStyles.clearfix}>
                  <img alt="" className={newsStyles.postImgStyle} src={edge.node.image.fluid.src}/>
                  <p className={newsStyles.postStyle}>{documentToReactComponents(edge.node.vorschau.json)}</p>
                </div>
              </Link>

            </li>
          )
        })}
      </ol>
      </div>
      </Layout>

  )
}

export default Newsroom
