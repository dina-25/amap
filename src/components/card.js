import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBCarousel } from 'mdbreact';
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const CardExample = () => {
  const aktNews = useStaticQuery(graphql`
    query NewsHome {
       allContentfulAktuelles(filter: {node_locale: {eq: "de"}}) {
         edges {
           node {
             inhalt {
               json
             }
             title
             teaser {
               fluid {
                 src
               }
             }
           }
         }
       }
     }
  `)

  return (
    <MDBCarousel activeItem={3} slide={true}>
      <MDBRow className="justify-content-start">
      {aktNews.allContentfulAktuelles.edges.map((edge) =>{
          return(

              <MDBCol md="3">
                <MDBCard>
                  <MDBCardImage top src={edge.node.teaser.fluid.src} overlay='white-slight' hover waves alt='MDBCard image cap' />
                  <MDBCardBody>
                    <MDBCardTitle tag="h3">{edge.node.title}</MDBCardTitle>
                    <hr />
                    <MDBCardText>{documentToReactComponents(edge.node.inhalt.json)}</MDBCardText>
                    <a href='#!' className='black-text d-flex justify-content-end'>
                      <h5>
                        Weiter lesen
                        <MDBIcon icon='angle-double-right' className='ml-2' />
                      </h5>
                    </a>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            )
              })}

      </MDBRow>
    </MDBCarousel>

  );
}

export default CardExample;
