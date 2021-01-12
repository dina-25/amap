import React from 'react'
import 'bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"
import LayoutD from '../components/layoutDE'
import homeStyle from '../styles/home.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Carousel from '../components/homeCarusal'
import '../../node_modules/bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mdbreact/dist/css/mdb.css'
import NewsCard from "../components/card"

const IndexPageDE = () => {

  const data = useStaticQuery(graphql`

      query{
        werSindwir: allContentfulHomeMake(
          sort: {
              fields: title,
              order: DESC
            },

              filter: {node_locale: {eq: "de"},

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

              filter: {node_locale: {eq: "de"},

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

              filter: {node_locale: {eq: "de"},

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
    <LayoutD>
      <SEO title="Home" />
      <div className={homeStyle.feedback}>
  			<a href="/aktuelles/CoronaCrisis">Nächste Kolloquien</a>
  		</div>
      <div className={homeStyle.feedback1}>
  			<a href="#news">Unsere Neuigkeiten</a>
  		</div>

    <div className={homeStyle.bodyWidth}>

      <Carousel/>
      <h3 className={homeStyle.titleStyling}>Unser Leistungsprofil</h3>
      <div class="container-fluid">
          <div class="row justify-content-center">
          <div class="col-xs-14 col-sm-12 col-md-9 col-lg-4 col-xl-4" >
            {data.werSindwir.edges.map((edge)=>{
              const document = edge.node.details.json
              return(
                  <div className={homeStyle.colMd4}>
                    <h4 className={homeStyle.titleSec2}>{edge.node.title}</h4>
                    <p className={homeStyle.textStyling}>{documentToReactComponents(document)}</p>
                  </div>
              )
        })}
          </div>
        <div class="col-xs-14 col-sm-12 col-md-9 col-lg-4 col-xl-4" >
          {data.wasMachenWir.edges.map((edge)=>{
              const document = edge.node.details.json
            return(
                    <div className={homeStyle.colMd4}>
                      <h4 className={homeStyle.titleSec2}>{edge.node.title}</h4>
                      <p className={homeStyle.textStyling}>{documentToReactComponents(document)}</p>
                    </div>
                )
          })}
            </div>
          <div class="col-xs-14 col-sm-12 col-md-9 col-lg-4 col-xl-4" >
            {data.unserLeistung.edges.map((edge)=>{
                const document = edge.node.details.json
              return(
                      <div className={homeStyle.colMd4}>
                        <h4 className={homeStyle.titleSec2}>{edge.node.title}</h4>
                        <p className={homeStyle.textStyling}>{documentToReactComponents(document)}</p>
                      </div>
                  )
            })}
            </div>
        </div>

      </div>

        <h3 className={homeStyle.titleStyling}>Unsere Kompetenzen</h3>
        <div className={homeStyle.wabe}>
          <img src={data.contentfulAsset.file.url} alt={data.title}/>
        </div>
        <h3 className={homeStyle.titleStyling}>Aktuelles</h3>
        <div id="news">
          <NewsCard/>
        </div>

    </div>

    </LayoutD>
  )
}

export default IndexPageDE
