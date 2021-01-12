import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from "../../components/seo"
import Layout from '../../components/layout'
import homeStyle from '../../styles/home.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import SlidePic from '../../components/homeCarusalEN'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mdbreact/dist/css/mdb.css'
import NewsCard from "../../components/cardEN"


const IndexPage = () => {

const indexEn = useStaticQuery(graphql`

          query{
            werSindwir: allContentfulHomeMake(
              sort: {
                  fields: title,
                  order: DESC
                },

                  filter: {node_locale: {eq: "en"},

                  slug: {eq: "werSindWir"}}
                ){
                edges{
                  node{
                  title
                  details{
                    json
                  }
                }
              }
            }

            wasMachenWir: allContentfulHomeMake(
              sort: {
                  fields: title,
                  order: DESC
                },

                  filter: {node_locale: {eq: "en"},

                  slug: {eq: "wasMachenWir"}}
                ){
                edges{
                  node{
                  title
                  details{
                    json
                  }
                }
              }
            }

            unserLeistung: allContentfulHomeMake(
              sort: {
                  fields: title,
                  order: DESC
                },

                  filter: {node_locale: {eq: "en"},

                  slug: {eq: "wasBietenWir"}}
                ){
                edges{
                  node{
                  title
                  details{
                    json
                  }
                }
              }
            }

      image2: contentfulAsset(title: {eq: "kompetenzEn"}) {
              title
              file {
                url
              }
            }
          }
        `)

  return (
    <Layout>
      <SEO title="Home" />
    <div className={homeStyle.bodyWidth}>
      <SlidePic/>
      <h3 className={homeStyle.titleStyling}>Our Performance Profile</h3>
      <div class="container-fluid">
          <div class="row justify-content-center">
          <div class="col-xs-14 col-sm-12 col-md-9 col-lg-4 col-xl-4" >
            {indexEn.werSindwir.edges.map((edge)=>{
              return(


                  <div className={homeStyle.colMd4}>
                    <h4 className={homeStyle.titleSec2}>{edge.node.title}</h4>
                    <p className={homeStyle.textStyling}>{documentToReactComponents(edge.node.details.json)}</p>
                  </div>
              )
        })}
        </div>

      <div class="col-xs-14 col-sm-12 col-md-9 col-lg-4 col-xl-4" >
          {indexEn.wasMachenWir.edges.map((edge)=>{
            return(
                    <div className={homeStyle.colMd4}>
                      <h4 className={homeStyle.titleSec2}>{edge.node.title}</h4>
                      <p className={homeStyle.textStyling}>{documentToReactComponents(edge.node.details.json)}</p>
                    </div>
                )
          })}
          </div>
        <div class="col-xs-14 col-sm-12 col-md-9 col-lg-4 col-xl-4" >
            {indexEn.unserLeistung.edges.map((edge)=>{
              return(
                      <div className={homeStyle.colMd4}>
                        <h4 className={homeStyle.titleSec2}>{edge.node.title}</h4>
                        <p className={homeStyle.textStyling}>{documentToReactComponents(edge.node.details.json)}</p>
                      </div>
                  )
            })}
              </div>
        </div>

      </div>

    <div className={homeStyle.feedbacken}>
      <a href="/en/aktuelles/CoronaCrisis">Coming Up Colloquia</a>
    </div>
    <div className={homeStyle.feedback1en}>
      <a href="#news">Latest News</a>
    </div>


        <h3 className={homeStyle.titleStyling}>Areas of Expertise</h3>
        <div className={homeStyle.wabe}>
          <img src={indexEn.image2.file.url} alt={indexEn.title}/>
        </div>

        <h3 className={homeStyle.titleStyling}>Latest News</h3>
        <div id="news">
          <NewsCard />
        </div>

    </div>

    </Layout>
  )
}

export default IndexPage
