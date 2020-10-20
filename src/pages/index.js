import React from 'react'
import 'bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"
import LayoutD from '../components/layoutDE'
import homeStyle from '../styles/home.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Carousel from '../components/homeCarusal'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
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
    <div className={homeStyle.bodyWidth}>

      <Carousel/>
      <h3 className={homeStyle.titleStyling}>Unser Leistungsprofil</h3>
      <div class="container">
          <div class="row">
            {data.werSindwir.edges.map((edge)=>{
              const document = edge.node.details.json
              return(
                  <div className={homeStyle.colMd4}>
                    <h4 className={homeStyle.secTitle}>{edge.node.title}</h4>
                    {documentToReactComponents(document)}
                  </div>
              )
        })}

          {data.wasMachenWir.edges.map((edge)=>{
              const document = edge.node.details.json
            return(
                    <div className={homeStyle.colMd4}>
                      <h4 className={homeStyle.secTitle}>{edge.node.title}</h4>
                      {documentToReactComponents(document)}
                    </div>
                )
          })}

            {data.unserLeistung.edges.map((edge)=>{
                const document = edge.node.details.json
              return(
                      <div className={homeStyle.colMd4}>
                        <h4 className={homeStyle.secTitle}>{edge.node.title}</h4>
                        {documentToReactComponents(document)}
                      </div>
                  )
            })}
        </div>

      </div>

    <div className={homeStyle.feedback}>
			<a href="/termine">Nächste Kolloquien</a>
		</div>
    <div className={homeStyle.feedback1}>
			<a href="#news">Unser Neuigkeiten</a>
		</div>


        <h3 className={homeStyle.titleStyling}>Unsere Kompetenzen</h3>

        <div class="container">
          <div class="row" className={homeStyle.row}>
            <div className={homeStyle.hexagonStyling}> <br/>Metallurgische Prozesstechnik</div>

          </div>

          <div class="row" className={homeStyle.row}>
            <div className={homeStyle.hexagonStyling}><br/>Produkt-/Werkstoffentwicklung</div>

          </div>
          <div class="row" className={homeStyle.row}>
            <div className={homeStyle.hexagonStyling}><br/> Fertigungstechnik</div>
          </div>
          <div class="row" className={homeStyle.row}>
            <div className={homeStyle.hexagonStyling}><br/> Modellierung</div>
          </div>

          <div className={homeStyle.hexaLists}>
            <ul>
              <li>Schmelzbehandlung</li>
              <li>Messtechnik</li>
              <li>Recycling</li>
              <li>Schmelz- und Raffinationsprozesse</li>
            </ul>
          </div>
          <div className={homeStyle.hexaLists}>
            <ul>
              <li>  Produktentwicklung</li>
              <li>  Oberflächen</li>
              <li>Liegierungsentwicklung</li>
              <li> Beschichtungen</li>
            </ul>
          </div>
          <div className={homeStyle.hexaLists}>
            <ul>
              <li>Giesen</li>
              <li>Umformen</li>
              <li>Fügen</li>
              <li>Wärmebehandlung</li>
            </ul>
          </div>
          <div className={homeStyle.hexaLists}>
            <ul>
              <li>Materialeigenschaften</li>
              <li>Produkteigenschaften</li>
              <li>Guss- und Formgebungsprozesse, Wärmebehandlung</li>
              <li>Prozessübergreifende Modellierung</li>
            </ul>
          </div>

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
