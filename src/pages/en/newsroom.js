import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import articleStyles from '../../styles/article.module.scss'
import newsStyles from '../../styles/newsroom.module.scss'
import homeStyles from '../../styles/home.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {MDBIcon } from 'mdbreact'

const Newsroom = () => {

 const pressQuery = useStaticQuery(graphql`
    query {
        allContentfulPresseArticle(
                  sort: {
                      fields: publichedDate,
                      order: DESC
                    }, filter: {node_locale: {eq: "de"}}
                  ){
                    edges {
                      node {
                        title
                        slug
                        poster{
                          file{
                            url
                          }
                        }
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
      <h3 className={homeStyles.titleStyling}>Press</h3>
      <ol className={articleStyles.articles}>
        {pressQuery.allContentfulPresseArticle.edges.map((edge) => {
          return (
            <li className={articleStyles.article}>
                <h4>{edge.node.title}</h4>
                <p>{edge.node.publischedDate}</p>
                <div className={newsStyles.clearfix}>
                    <img alt="" className={newsStyles.postImgStyle} src={edge.node.image.fluid.src}/>
                  <p className={newsStyles.postStyle}><span>{documentToReactComponents(edge.node.vorschau.json)}</span></p>
                  <a href={edge.node.poster.file.url} className='black-text d-flex justify-content-end'>
                    <h5>
                      Weiter lesen
                      <MDBIcon icon='angle-double-right' className='ml-2' />
                    </h5></a>
                </div>
            </li>
          )
        })}
      </ol>
      </div>
      </Layout>

  )
}

export default Newsroom
