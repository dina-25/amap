import React from 'react'
import SEO from "../components/seo"
import {Link, graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layoutDE'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import partnerStyles from '../styles/partner.module.scss'
import homeStyles from '../styles/home.module.scss'
import '../styles/styles.css'
import {MDBIcon } from 'mdbreact'

const Partners = () => {


const partQuery = useStaticQuery(graphql`
  query {
    allContentfulVollMitgliedsfirmen(filter: {node_locale: {eq: "de"}}, sort: {fields: mitglieder})
      {
    edges {
      node {
        slug
        mitglieder
        thumbnail {
          fluid{
            src
          }
        }
        image{
          file{
            url
          }
        }
        adress{
          json
        }
        link
        statement {
          json
        }
      }
    }
  }
  image1: contentfulAsset(title: {eq: "partnerGraphicFull"}) {
   fluid(quality: 10) {
     base64
     src
   }
  }
  image2: contentfulAsset(title: {eq: "grundungsinstituteGraph"}) {
    fluid(quality: 10) {
    base64
    src
  }
  }
  allContentfulAssoziierteMitgliedsfirmen(filter: {node_locale: {eq: "de"}}, sort: {fields: firmenname}) {
    edges {
      node {
        firmenname
        adresse{
          json
        }
        link
        poster1{
          file{
            url
          }
        }
        logo {
          fluid {
            src
          }
        }
      }
    }
  }
  allContentfulMitgliedsinstituteDerRwthAachenUniversity(filter: {node_locale: {eq: "de"}}, sort: {fields: slug}) {
   edges {
     node {
       link
       adresse{
         json
       }
       institutsname
       poster {
         file {
           url
         }
       }
       logo{
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
    <div>
    <Layout>
      <SEO title="Unser Partner" />
      <div className={partnerStyles.wrapper}>
        <h3 className={homeStyles.titleStyling}>Mitgliedsfirmen und Institute</h3>
        <img alt="" className={partnerStyles.partnerImage} src={partQuery.image1.fluid.src}/>
        <h3 className={homeStyles.titleStyling}>Firmen in Vollmitgliedschaft</h3>
        <ol className={partnerStyles.mitgliedern}>

              {partQuery.allContentfulVollMitgliedsfirmen.edges.map((edge) =>{
                  var path = `https://${edge.node.link}`
                return(
                    <li className={partnerStyles.mitglied}>
                      <a href={edge.node.image.file.url}>
                        <img className={partnerStyles.postImgStyle} alt="" src={edge.node.thumbnail.fluid.src}/>
                      </a>
                        <div className={partnerStyles.clearfix}>
                        <h4>{edge.node.mitglieder}</h4>
                        <p className={partnerStyles.addressStyling}>{documentToReactComponents(edge.node.adress.json)}</p>
                        <a href={path}>{edge.node.link}</a>
                        <Link to={edge.node.mitglieder} className='black-text d-flex justify-content-end'>
                        <h5>
                          Weiter lesen
                          <MDBIcon icon='angle-double-right' className='ml-2' />
                        </h5>
                        </Link>
                      </div>
                      <hr className={partnerStyles.underline}/>
                    </li>
                 )
               })}
        </ol>

        <h3 className={homeStyles.titleStyling}>Assoziierte Mitgliedsfirmen</h3>

        <ol className={partnerStyles.mitgliedern}>

              {partQuery.allContentfulAssoziierteMitgliedsfirmen.edges.map((edge) =>{
                  var path = `https://${edge.node.link}`
                return(
                    <li className={partnerStyles.mitglied}>
                    <a href={edge.node.poster1.file.url}>
                      <img className={partnerStyles.postImgStyle} alt="" src={edge.node.logo.fluid.src}/>
                      </a>
                        <div className={partnerStyles.clearfix}>
                        <h4>{edge.node.firmenname}</h4>
                        <p className={partnerStyles.addressStyling}>{documentToReactComponents(edge.node.adresse.json)}</p>
                        <a href={path}>{edge.node.link}</a>
                      </div>
                      <hr className={partnerStyles.underline}/>
                    </li>
                 )
               })}
        </ol>

        <h3 className={homeStyles.titleStyling}>Mitgliedsinstitute der RWTH Aachen University</h3>

        <ol className={partnerStyles.mitgliedern}>

              {partQuery.allContentfulMitgliedsinstituteDerRwthAachenUniversity.edges.map((edge) =>{
                  var path = `https://${edge.node.link}`
                return(
                    <li className={partnerStyles.mitglied}>
                    <a href={edge.node.poster.file.url}>
                      <img className={partnerStyles.postImgStyle} alt="" src={edge.node.logo.fluid.src}/></a>
                        <div className={partnerStyles.clearfix}>
                        <h4>{edge.node.institutsname}</h4>
                        <p className={partnerStyles.addressStyling}>{documentToReactComponents(edge.node.adresse.json)}</p>
                        <a href={path}>{edge.node.link}</a>
                      </div>
                      <hr className={partnerStyles.underline}/>
                    </li>
                 )
               })}
        </ol>

        <h3 className={homeStyles.titleStyling}>Gründungsinstitute - Stand 2012</h3>
        <img id="myImg" alt="Gruendungs Institute" className={partnerStyles.partnerImage} src={partQuery.image2.fluid.src} height="700"/>

        <div id="myModal" class="modal">
          <span class="close">&times;</span>
            <img class="modal-content" id="img01" alt=""/>
              <div id="caption"></div>
        </div>

      </div>
    </Layout>
    </div>
  )
}

export default Partners
