import React from 'react'
import SEO from "../../components/seo"
import {Link, graphql, useStaticQuery} from 'gatsby'
import Layout from '../../components/layout'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import partnerStyles from '../../styles/partner.module.scss'
import homeStyles from '../../styles/home.module.scss'
import {MDBIcon } from 'mdbreact'


const Partners = () => {

  const partnerQueryEn = useStaticQuery(graphql`
    query {
      allContentfulVollMitgliedsfirmen(filter: {node_locale: {eq: "en"}},sort: {fields: mitglieder})
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
          statement{
            json
          }
        }
      }
    }
    image1: contentfulAsset(title: {eq: "partnerGraphicFullEN"}) {
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
   allContentfulAssoziierteMitgliedsfirmen(filter: {node_locale: {eq: "en"}}, sort: {fields: firmenname}) {
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
    allContentfulMitgliedsinstituteDerRwthAachenUniversity(filter: {node_locale: {eq: "en"}}, sort: {fields: institutsname}) {
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
        <h3 className={homeStyles.titleStyling}>Companies and Institutes</h3>
        <img alt="" className={partnerStyles.partnerImage} src={partnerQueryEn.image1.fluid.src}/>
        <h3 className={homeStyles.titleStyling}>Companies with Full Membership</h3>
        <ol className={partnerStyles.mitgliedern}>

              {partnerQueryEn.allContentfulVollMitgliedsfirmen.edges.map((edge) =>{
                return(
                    <li className={partnerStyles.mitglied}>
                    <a href={edge.node.image.file.url}>
                      <img className={partnerStyles.postImgStyle} alt="" src={edge.node.thumbnail.fluid.src}/> </a>
                        <div className={partnerStyles.clearfix}>
                        <h4>{edge.node.mitglieder}</h4>
                        <p className={partnerStyles.addressStyling}>{documentToReactComponents(edge.node.adress.json)}</p>
                        <a href={edge.node.link}>{edge.node.link}</a>
                        <Link to={edge.node.mitglieder} className='black-text d-flex justify-content-end'>
                          <h5>
                          more
                            <MDBIcon icon='angle-double-right' className='ml-2' />
                          </h5>
                          </Link>
                      </div>
                      <hr className={partnerStyles.underline}/>
                    </li>
                 )
               })}
        </ol>

        <h3 className={homeStyles.titleStyling}>Associated Companies</h3>

        <ol className={partnerStyles.mitgliedern}>

              {partnerQueryEn.allContentfulAssoziierteMitgliedsfirmen.edges.map((edge) =>{
                return(
                    <li className={partnerStyles.mitglied}>
                    <a href={edge.node.poster1.file.url}>
                      <img className={partnerStyles.postImgStyle} alt="" src={edge.node.logo.fluid.src}/></a>
                        <div className={partnerStyles.clearfix}>
                        <h4>{edge.node.firmenname}</h4>
                      <p className={partnerStyles.addressStyling}>{documentToReactComponents(edge.node.adresse.json)}</p>
                        <a href={edge.node.link}>{edge.node.link}</a>
                      </div>
                      <hr className={partnerStyles.underline}/>
                    </li>
                 )
               })}
        </ol>

        <h3 className={homeStyles.titleStyling}>Member Institutes of RWTH Aachen University</h3>

        <ol className={partnerStyles.mitgliedern}>

              {partnerQueryEn.allContentfulMitgliedsinstituteDerRwthAachenUniversity.edges.map((edge) =>{
                return(
                    <li className={partnerStyles.mitglied}>
                    <a href={edge.node.poster.file.url}>
                      <img className={partnerStyles.postImgStyle} alt="" src={edge.node.logo.fluid.src}/></a>
                        <div className={partnerStyles.clearfix}>
                        <h4>{edge.node.institutsname}</h4>
                      <p className={partnerStyles.addressStyling}>{documentToReactComponents(edge.node.adresse.json)}</p>
                        <a href={edge.node.link}>{edge.node.link}</a>
                      </div>
                      <hr className={partnerStyles.underline}/>
                    </li>
                 )
               })}
        </ol>

        <h3 className={homeStyles.titleStyling}>Founding Institutes - Year 2012</h3>
        <img alt="" className={partnerStyles.partnerImage} src={partnerQueryEn.image2.fluid.src} height="700"/>

      </div>
    </Layout>
    </div>
  )
}

export default Partners
