import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import {graphql, useStaticQuery} from "gatsby";
import caroStyle from "../styles/carousel.module.scss"

const CarouselEN = () => {

  const data = useStaticQuery(graphql`

    query imageSliderEN {
      Statement1: contentfulHomeCarsaul(contentfulid: {eq: "statement1"}, node_locale: {eq: "en"}) {
        	photo {
            fluid(quality: 10){
              src
            }
          }
        }

        Statement2: contentfulHomeCarsaul(contentfulid: {eq: "statement2"}, node_locale: {eq: "en"}) {
          	photo {
              fluid(quality: 10){
                src
              }
            }
          }

          Statement3: contentfulHomeCarsaul(contentfulid: {eq: "statement3"}, node_locale: {eq: "en"}) {
            	photo {
                fluid(quality: 10){
                  src
                }
              }
            }
}

    `)

  return (
    <MDBContainer>
      <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className={caroStyle.slideShape} src={data.Statement1.photo.fluid.src} alt="First slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className={caroStyle.slideShape} src={data.Statement2.photo.fluid.src} alt="Second slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img  className={caroStyle.slideShape} src={data.Statement3.photo.fluid.src}  alt="Third slide" />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselEN;
