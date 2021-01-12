import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layoutDE'
import homeStyle from '../styles/home.module.scss'
import SEO from '../components/seo'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

const Impressum = () => {

 const impressum = useStaticQuery(graphql`
   query {
     Anschrift: allContentfulImpressum(filter: {node_locale: {eq: "de"}, title: {eq: "Anschrift"}}){
       edges{
         node{
           title
           impressum {
             json
           }
         }
       }
    }

    Kontakt: allContentfulImpressum(filter: {node_locale: {eq: "de"}, title: {eq: "Kontakt"}}){
      edges{
        node{
          title
          impressum {
            json
          }
        }
      }
    }

      Geschft: allContentfulImpressum(filter: {node_locale: {eq: "de"}, title: {eq: "Geschäftsführer"}}){
        edges{
          node{
            title
            impressum {
              json
            }
          }
        }
      }

      legalDetails: allContentfulImpressum(filter: {node_locale: {eq: "de"}, title: {eq: "Rest"}}){
        edges{
          node{
            impressum {
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
      <SEO title="Legal Notice" />
      <div className={homeStyle.bodyWidth}>
        <div class="container-fluid">
          <div class="row justify-content-center">

            <div class="col-xs-14 col-sm-12 col-md-9 col-lg-4 col-xl-4" >
              {impressum.Anschrift.edges.map((edge)=>{
                return(
                    <div className={homeStyle.colMd4}>
                      <h4 className={homeStyle.secTitle}>{edge.node.title}</h4>
                      <p>{documentToReactComponents(edge.node.impressum.json)}</p>
                    </div>
                )
          })}
          </div>

        <div class="col-xs-14 col-sm-6 col-md-9 col-lg-4 col-xl-4" >
            {impressum.Kontakt.edges.map((edge)=>{
              return(
                      <div className={homeStyle.colMd4}>
                        <h4 className={homeStyle.secTitle}>{edge.node.title}</h4>
                        <p>{documentToReactComponents(edge.node.impressum.json)}</p>
                      </div>
                  )
            })}
            </div>

          <div class="col-xs-14 col-sm-6 col-md-9 col-lg-4 col-xl-4" >
              {impressum.Geschft.edges.map((edge)=>{
                return(
                        <div className={homeStyle.colMd4}>
                          <h4 className={homeStyle.secTitle}>{edge.node.title}</h4>
                          <p>{documentToReactComponents(edge.node.impressum.json)}</p>
                        </div>
                    )
              })}
                </div>

              </div>
              </div>

              <div class="col-xs-14 col-sm-6 col-md-9 col-lg-12 col-xl-12" >
                  {impressum.legalDetails.edges.map((edge)=>{
                    return(
                            <div className={homeStyle.colMd4}>
                              <p>{documentToReactComponents(edge.node.impressum.json)}</p>
                            </div>
                        )
                  })}
                    </div>

              </div>
      </Layout>
    </div>
  )
}

export default Impressum
