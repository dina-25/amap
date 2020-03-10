import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/layout'
import homeStyle from '../styles/home.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import SlidePic from '../components/homeCarusal'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'



const IndexPage = () => {

  const data = useStaticQuery(graphql`

      query{
        allContentfulHomeMake(
          sort: {
              fields: title,
              order: DESC
            }
          filter: {
            node_locale:{
              eq: "de"
            }
          }
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

        contentfulAsset(title: {eq: "Wabe-de"}) {
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
      <div className={homeStyle.position}>
      {data.allContentfulHomeMake.edges.map((edge)=>{
        return(

            <div className={homeStyle.position}>
                <div className={homeStyle.txtStyle}>
                <div className={homeStyle.clearfix}>
                  <h4 className={homeStyle.secTitle}>{edge.node.title}</h4>
                  <p>{documentToReactComponents(edge.node.details.json)}</p>
                </div>
                </div>
            </div>

          )
        })}
        </div>
        <div className={homeStyle.section2}>
          <h4 className={homeStyle.titleSec2}>Kompetenzen</h4>
        <div className={homeStyle.sectionA}>
          <img  className={homeStyle.komptImgStyling} src={data.contentfulAsset.file.url} alt={data.title}/>
          <div className={homeStyle.sectionB}>
            <p><b>A. Modellierung:</b>
            <p>WERKSTOFF- und PRODUKTEIGENSCHAFTEN <br/>
               PROZESSE (Gießen, Umformen, Wärmebehandeln) <br/>
               PROZESSÜBERGREIFENDE MODELLIERUNG <br/>
               (Through-Process-Modeling)</p></p>
          <p><b>B. Produkt- und Werkstoffentwicklung:</b>
          <p>PRODUKTENTWICKLUNG<br/>
             OBERFLÄCHEN<br/>
             LEGIERUNGSENTWICKLUNG<br/>
             BESCHICHTUNG</p></p>
          <p><b>D. Metallurgische Prozesstechnik:</b>
          <p>SCHMELZEBEHANDLUNG<br/>
             MESSTECHNIK<br/>
             METALLRECYCLING<br/>
             SCHMELZ- UND RAFFINATIONSPROZESSE</p></p>
          <p><b>E. Fertigungstechnik:</b>
          <p>GIESSEN<br/>
             UMFORMEN<br/>
             FÜGEN<br/>
             WÄRMEBEHANDLUNG</p></p>
          </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
