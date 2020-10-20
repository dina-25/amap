import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/layout'
import homeStyle from '../styles/home.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import SlidePic from '../components/homeCarusalEN'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import NewsCard from "../components/cardEN"


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

          contentfulAsset(title: {eq: "kompetenz"}) {
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
      <div class="container">
          <div class="row">
            {indexEn.werSindwir.edges.map((edge)=>{
              return(


                  <div className={homeStyle.colMd4}>
                    <h4 className={homeStyle.secTitle}>{edge.node.title}</h4>
                    <p>{documentToReactComponents(edge.node.details.json)}</p>
                  </div>
              )
        })}

          {indexEn.wasMachenWir.edges.map((edge)=>{
            return(
                    <div className={homeStyle.colMd4}>
                      <h4 className={homeStyle.secTitle}>{edge.node.title}</h4>
                      <p>{documentToReactComponents(edge.node.details.json)}</p>
                    </div>
                )
          })}

            {indexEn.unserLeistung.edges.map((edge)=>{
              return(
                      <div className={homeStyle.colMd4}>
                        <h4 className={homeStyle.secTitle}>{edge.node.title}</h4>
                        <p>{documentToReactComponents(edge.node.details.json)}</p>
                      </div>
                  )
            })}
        </div>

      </div>

    <div className={homeStyle.feedbacken}>
      <a href="/termine">Coming Up Colloquia</a>
    </div>
    <div className={homeStyle.feedback1en}>
      <a href="#news">Latest News</a>
    </div>


        <h3 className={homeStyle.titleStyling}>Areas of Expertise</h3>

        <div class="container">
          <div class="row" className={homeStyle.row1}>
            <div className={homeStyle.hexagonStyling1}>Metallurgical Process Technology</div>

          </div>

          <div class="row" className={homeStyle.row1}>
            <div className={homeStyle.hexagonStyling1}>Product and Material Development</div>

          </div>
          <div class="row" className={homeStyle.row1}>
            <div className={homeStyle.hexagonStyling1}>Production Technology</div>
          </div>
          <div class="row" className={homeStyle.row1}>
            <div className={homeStyle.hexagonStyling1}><br/> Modelling</div>
          </div>

          <div className={homeStyle.hexaLists1}>
            <ul>
              <li>  Melt Treatment</li>
              <li>  Measurement Technology</li>
              <li>  Recycling</li>
              <li>  Melting and Refinery Processes</li>
            </ul>
          </div>
          <div className={homeStyle.hexaLists1}>
            <ul>
              <li>  Product Development</li>
              <li>  Surfaces</li>
              <li>  Alloy Development</li>
              <li>  Corrosion</li>
            </ul>
          </div>
          <div className={homeStyle.hexaLists1}>
            <ul>
              <li>  Casting</li>
              <li>  Forming</li>
              <li>  Joining</li>
              <li>  Heat Treatment</li>
            </ul>
          </div>
          <div className={homeStyle.hexaLists1}>
            <ul>
              <li>  Material Properties</li>
              <li>  Product Properties</li>
              <li>  Casting- and Forming-proccesses, Heat Treatment</li>
              <li>  Through Process Modelling</li>
            </ul>
          </div>

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
