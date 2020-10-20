import React from 'react'
import SEO from "../components/seo"
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layoutDE'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import partnerStyles from '../styles/partner.module.scss'
import homeStyles from '../styles/home.module.scss'

const Partners = () => {

const partQuery = useStaticQuery(graphql`
  query {
    allContentfulVollMitgliedsfirmen(filter: {node_locale: {eq: "de"}}, sort: {fields: mitglieder})
      {
    edges {
      node {
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
      }
    }
  }
  image1: contentfulAsset(title: {eq: "partnerGraphicFull"}) {
   fluid(quality: 10) {
     base64
     src
   }
  }
  image2: contentfulAsset(title: {eq: "Gründungsinstitute"}) {
    fluid(quality: 10) {
    base64
    src
  }
  }
  allContentfulAssoziierteMitgliedsfirmen(filter: {node_locale: {eq: "de"}}, sort: {fields: firmenname}) {
    edges {
      node {
        firmenname
        address
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
  allContentfulMitgliedsinstituteDerRwthAachenUniversity(filter: {node_locale: {eq: "de"}}, sort: {fields: institutsname}) {
   edges {
     node {
       link
       address
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
                return(

                    <li className={partnerStyles.mitglied}>
                      <a href={edge.node.image.file.url}>
                        <img className={partnerStyles.postImgStyle} alt="" src={edge.node.thumbnail.fluid.src}/>
                      </a>
                        <div className={partnerStyles.clearfix}>
                        <h4>{edge.node.mitglieder}</h4>
                        <p className={partnerStyles.addressStyling}>{documentToReactComponents(edge.node.adress.json)}</p>
                        <a href={edge.node.link}>{edge.node.link}</a>
                      </div>
                      <hr className={partnerStyles.underline}/>
                    </li>
                 )
               })}
        </ol>

        <h3 className={homeStyles.titleStyling}>Assoziierte Mitgliedsfirmen</h3>

        <ol className={partnerStyles.mitgliedern}>

              {partQuery.allContentfulAssoziierteMitgliedsfirmen.edges.map((edge) =>{
                return(
                    <li className={partnerStyles.mitglied}>
                    <a href={edge.node.poster1.file.url}>
                      <img className={partnerStyles.postImgStyle} alt="" src={edge.node.logo.fluid.src}/>
                      </a>
                        <div className={partnerStyles.clearfix}>
                        <h4>{edge.node.firmenname}</h4>
                        <p className={partnerStyles.addressStyling}>{edge.node.address}</p>
                      </div>
                      <hr className={partnerStyles.underline}/>
                    </li>
                 )
               })}
        </ol>

        <h3 className={homeStyles.titleStyling}>Mitgliedsinstitute der RWTH Aachen University</h3>

        <ol className={partnerStyles.mitgliedern}>

              {partQuery.allContentfulMitgliedsinstituteDerRwthAachenUniversity.edges.map((edge) =>{
                return(
                    <li className={partnerStyles.mitglied}>
                    <a href={edge.node.poster.file.url}>
                      <img className={partnerStyles.postImgStyle} alt="" src={edge.node.logo.fluid.src}/></a>
                        <div className={partnerStyles.clearfix}>
                        <h4>{edge.node.institutsname}</h4>
                        <p className={partnerStyles.addressStyling}>{edge.node.address}</p>
                        <a href={edge.node.link}>{edge.node.link}</a>
                      </div>
                      <hr className={partnerStyles.underline}/>
                    </li>
                 )
               })}
        </ol>

        <h3 className={homeStyles.titleStyling}>Gründungsinstitute - Stand 2012</h3>
        <img alt="" className={partnerStyles.partnerImage} src={partQuery.image2.fluid.src}/>

      </div>
    </Layout>
    </div>
  )
}

export default Partners
