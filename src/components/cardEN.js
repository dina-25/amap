import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCarousel, MDBIcon } from 'mdbreact';
import { graphql, useStaticQuery, Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import CardStyling from '../styles/map.module.scss'
import homeStyle from '../styles/home.module.scss'

const CardExample = () => {
  const aktNewsEN = useStaticQuery(graphql`
    query NewsHomeEN {
       allContentfulAktuelles(filter: {node_locale: {eq: "en"}}) {
         edges {
           node {
             slug
             inhalt {
               json
             }
             title
             teaser {
               fluid {
                 src
               }
             }
             weiterInfo {
               json
             }
           }
         }
       }
     }
  `)

  return (
    <div className={CardStyling.cardGrid}>
      <MDBRow className="justify-content-center space-around">
    {aktNewsEN.allContentfulAktuelles.edges.map((edge) =>{
        var path = `/en/aktuelles/${edge.node.slug}`
                          return(
                            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-6 col-xl-3" >
                            <MDBCard>
          <MDBCardImage top src={edge.node.teaser.fluid.src} overlay='white-slight' hover waves alt='MDBCard image cap' />
          <MDBCardBody>
            <MDBCardTitle tag="h3"><h3 className={CardStyling.cardText}>{edge.node.title}</h3></MDBCardTitle>
            <hr />
            <MDBCardText><p className={homeStyle.textStyling}>{documentToReactComponents(edge.node.inhalt.json)}</p></MDBCardText>
            <Link to={path} className='black-text d-flex justify-content-end'>
              <h5>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </Link>
          </MDBCardBody>
        </MDBCard>
      </div>
    )
                })}

    </MDBRow>
  </div>

  );
}

export default CardExample;
