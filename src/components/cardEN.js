import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const CardExample = () => {
  const aktNewsEN = useStaticQuery(graphql`
    query NewsHomeEN {
       allContentfulAktuelles(filter: {node_locale: {eq: "en"}}) {
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
             weiterInfo {
               json
             }
           }
         }
       }
     }
  `)

  return (

      <MDBRow className="justify-content-start">
    {aktNewsEN.allContentfulAktuelles.edges.map((edge) =>{
                          return(

      <MDBCol md="3">
        <MDBCard ml="2">
          <MDBCardImage top src={edge.node.teaser.fluid.src} overlay='white-slight' hover waves alt='MDBCard image cap' />
          <MDBCardBody>
            <MDBCardTitle tag="h3">{edge.node.title}</MDBCardTitle>
            <hr />
            <MDBCardText>{documentToReactComponents(edge.node.inhalt.json)}</MDBCardText>
            <a href="#!" className='black-text d-flex justify-content-end'>
              <h5>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
                })}

    </MDBRow>


  );
}

export default CardExample;
