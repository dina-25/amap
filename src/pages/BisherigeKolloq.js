import React from 'react'
import SEO from "../components/seo"
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layout'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import articleStyles from '../styles/article.module.scss'
import newsStyles from '../styles/newsroom.module.scss'
import kolloqStyles from '../styles/colloquium.module.scss'


const BisherigeK = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBisherigeKolloquien201415(filter: {
        node_locale: {
          eq: "de"
        }
        hasLink:{
          eq: true
        }
      }) {
        edges{
          node{
            image {
              fluid {
                src
                base64
              }
            }
            content {
                json
              }
              titel
              presentation {
                file {
                  url
                }
              }
            }
          }
        }

      }

    `)

  return (
    <div>
    <Layout>
      <SEO title="Bisherige Kolloquien" />
      <div className={newsStyles.wrapper}>
      <ol className={articleStyles.articles}>
        {data.allContentfulBisherigeKolloquien201415.edges.map((edge) => {
          return (
            <li className={articleStyles.article}>

                <h4>{edge.node.title}</h4>
                <div className={newsStyles.clearfix}>
                  <img alt="" className={newsStyles.postImgStyle} src={edge.node.image.fluid.src}/>
                  <p className={newsStyles.postStyle}>{documentToReactComponents(edge.node.content.json)}</p>
                  <button className={kolloqStyles.buttonStyling} href={edge.node.presentation.file.url} download>Präsentation</button>
                </div>

            </li>
          )
        })}
      </ol>
      </div>


    </Layout>
    </div>
  )
}

export default BisherigeK
