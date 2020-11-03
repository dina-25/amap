import React from 'react'
import SEO from "../components/seo"
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layoutDE'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import articleStyles from '../styles/article.module.scss'
import newsStyles from '../styles/newsroom.module.scss'
import {MDBIcon } from 'mdbreact';


const BisherigeK = () => {

  const data = useStaticQuery(graphql`
    query KolloqENQuery{
      allContentfulBisherigeKolloquien201415(sort: {order: DESC, fields: titel}, filter: {hasLink: {eq: true}, node_locale: {eq: "en"}}) {
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
        allContentfulBisherigeKolloquien201617(sort: {order: DESC, fields: titel}, filter: {hasLink: {eq: true}, node_locale: {eq: "en"}}) {
            edges {
              node {
                titel
                presentation {
                  file {
                    url
                  }
                }
                content {
                    json
                  }
                image {
                  fluid {
                    base64
                    src
                  }
                }
              }
            }
          }
          allContentfulBisherigeKolloquien201819(sort: {order: DESC, fields: titel}, filter: {hasLink: {eq: true}, node_locale: {eq: "en"}}) {
              edges {
                node {
                  presentation {
                    file {
                      url
                    }
                  }
                  image {
                    fluid {
                      base64
                      src
                    }
                  }
                  titel
                  content {
                    json
                  }
                }
              }
            }
            allContentfulBisherigeKolloquien202021(sort: {order: DESC, fields: titel}, filter: {node_locale: {eq: "en"}, hasLink: {eq: true}}) {
              edges {
                node {
                  titel
                  present{
                    file{
                      url
                    }
                  }
                  image {
                    fluid {
                      base64
                      src
                    }
                  }
                  content {
                    json
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
        {data.allContentfulBisherigeKolloquien202021.edges.map((edge) => {
          return (
            <li className={articleStyles.article}>
                <div className={newsStyles.clearfix}>
                  <h4>{edge.node.titel}</h4>
                  <img alt="" className={newsStyles.postImgStyle} src={edge.node.image.fluid.src}/>
                  <p className={newsStyles.postStyle}>{documentToReactComponents(edge.node.content.json)}</p>
                  <a href={edge.node.present.file.url} className='black-text d-flex justify-content-end'>
                    <h5>
                        Presentation
                      <MDBIcon icon='angle-double-right' className='ml-2' />
                    </h5></a>
                </div>
            </li>
          )
        })}
      </ol>

      <ol className={articleStyles.articles}>
        {data.allContentfulBisherigeKolloquien201819.edges.map((edge) => {
          return (
            <li className={articleStyles.article}>
                <div className={newsStyles.clearfix}>
                  <h4>{edge.node.titel}</h4>
                  <img alt="" className={newsStyles.postImgStyle} src={edge.node.image.fluid.src}/>
                  <p className={newsStyles.postStyle}>{documentToReactComponents(edge.node.content.json)}</p>
                  <a href={edge.node.presentation.file.url} className='black-text d-flex justify-content-end'>
                    <h5>
                        Presentation
                      <MDBIcon icon='angle-double-right' className='ml-2' />
                    </h5></a>
                </div>
            </li>
          )
        })}
      </ol>

      <ol className={articleStyles.articles}>
        {data.allContentfulBisherigeKolloquien201617.edges.map((edge) => {
          return (
            <li className={articleStyles.article}>
                <div className={newsStyles.clearfix}>
                  <h4>{edge.node.titel}</h4>
                  <img alt="" className={newsStyles.postImgStyle} src={edge.node.image.fluid.src}/>
                  <p className={newsStyles.postStyle}>{documentToReactComponents(edge.node.content.json)}</p>
                  <a href={edge.node.presentation.file.url} className='black-text d-flex justify-content-end'>
                    <h5>
                        Presentation
                      <MDBIcon icon='angle-double-right' className='ml-2' />
                    </h5></a>
                </div>
            </li>
          )
        })}
      </ol>

      <ol className={articleStyles.articles}>
        {data.allContentfulBisherigeKolloquien201415.edges.map((edge) => {
          return (
            <li className={articleStyles.article}>
                <div className={newsStyles.clearfix}>
                  <h4>{edge.node.titel}</h4>
                  <img alt="" className={newsStyles.postImgStyle} src={edge.node.image.fluid.src}/>
                  <p className={newsStyles.postStyle}>{documentToReactComponents(edge.node.content.json)}</p>
                  <a href={edge.node.presentation.file.url} className='black-text d-flex justify-content-end'>
                    <h5>
                        Presentation
                      <MDBIcon icon='angle-double-right' className='ml-2' />
                    </h5></a>
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
