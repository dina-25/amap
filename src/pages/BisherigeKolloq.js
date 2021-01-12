import React from 'react'
import SEO from "../components/seo"
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layoutDE'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import articleStyles from '../styles/article.module.scss'
import newsStyles from '../styles/newsroom.module.scss'
import homeStyle from '../styles/home.module.scss'
import {MDBIcon } from 'mdbreact';

const BisherigeK = () => {

  const colloq = useStaticQuery(graphql`
    query KolloqQuery{
      allContentfulBisherigeKolloquien201415(sort: {order: DESC, fields: slug}, filter: {hasLink: {eq: true}, node_locale: {eq: "de"}}) {
        edges{
          node{
            content {
                json
              }
            image {
              fluid {
                src
                base64
              }
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
        allContentfulBisherigeKolloquien201617(sort: {order: DESC, fields: slug}, filter: {hasLink: {eq: true}, node_locale: {eq: "de"}}) {
            edges {
              node {
                titel
                image {
                  fluid {
                    base64
                    src
                  }
                }
                content {
                    json
                  }
                presentation {
                  file {
                    url
                  }
                }
              }
            }
          }
          allContentfulBisherigeKolloquien201819(sort: {order: DESC, fields: slug}, filter: {hasLink: {eq: true}, node_locale: {eq: "de"}}) {
              edges {
                node {
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
                  presentation {
                    file {
                      url
                    }
                  }
                }
              }
            }
            allContentfulBisherigeKolloquien202021(sort: {order: DESC, fields: slug}, filter: {node_locale: {eq: "de"}, hasLink: {eq: true}}) {
              edges {
                node {
                  titel
                  present {
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
      }
    `)

  return (
    <div>
    <Layout>
      <SEO title="Bisherige Kolloquien" />
      <div className={newsStyles.wrapper}>
      <h3 className={homeStyle.titleStyling}>Bisherige Kolloquien</h3>
      <ol className={articleStyles.articles}>
        {colloq.allContentfulBisherigeKolloquien202021.edges.map((edge) => {
          return (
            <li className={articleStyles.article}>
                <div className={newsStyles.clearfix}>
                  <h4>{edge.node.titel}</h4>
                  <img alt="" className={newsStyles.postImgStyle} src={edge.node.image.fluid.src}/>
                  <p className={newsStyles.postStyle}>{documentToReactComponents(edge.node.content.json)}</p>
                  <a href={edge.node.present.file.url} className='black-text d-flex justify-content-end'>
                    <h5>
                      Präsentation
                      <MDBIcon icon='angle-double-right' className='ml-2' />
                    </h5></a>
                </div>

            </li>
          )
        })}
      </ol>

      <ol className={articleStyles.articles}>
        {colloq.allContentfulBisherigeKolloquien201819.edges.map((edge) => {
          return (
            <li className={articleStyles.article}>
                <div className={newsStyles.clearfix}>
                  <h4>{edge.node.titel}</h4>
                  <img alt="" className={newsStyles.postImgStyle} src={edge.node.image.fluid.src}/>
                  <p className={newsStyles.postStyle}>{documentToReactComponents(edge.node.content.json)}</p>
                  <a href={edge.node.presentation.file.url} className='black-text d-flex justify-content-end'>
                    <h5>
                        Präsentation
                      <MDBIcon icon='angle-double-right' className='ml-2' />
                    </h5></a>
                </div>
            </li>
          )
        })}
      </ol>

      <ol className={articleStyles.articles}>
        {colloq.allContentfulBisherigeKolloquien201617.edges.map((edge) => {
          return (
            <li className={articleStyles.article}>
                <div className={newsStyles.clearfix}>
                  <h4>{edge.node.titel}</h4>
                  <img alt="" className={newsStyles.postImgStyle} src={edge.node.image.fluid.src}/>
                  <p className={newsStyles.postStyle}>{documentToReactComponents(edge.node.content.json)}</p>
                  <a href={edge.node.presentation.file.url} className='black-text d-flex justify-content-end'>
                    <h5>
                        Präsentation
                      <MDBIcon icon='angle-double-right' className='ml-2' />
                    </h5></a>
                </div>

            </li>
          )
        })}
      </ol>

      <ol className={articleStyles.articles}>
        {colloq.allContentfulBisherigeKolloquien201415.edges.map((edge) => {
          return (
            <li className={articleStyles.article}>
                <div className={newsStyles.clearfix}>
                  <h4>{edge.node.titel}</h4>
                  <img alt="" className={newsStyles.postImgStyle} src={edge.node.image.fluid.src}/>
                  <p className={newsStyles.postStyle}>{documentToReactComponents(edge.node.content.json)}</p>
                  <a href={edge.node.presentation.file.url} className='black-text d-flex justify-content-end'>
                    <h5>
                        Präsentation
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
