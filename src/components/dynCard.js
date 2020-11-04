import React from "react";
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { MDBIcon }  from 'mdbreact'
import '@fortawesome/fontawesome-free/css/all.min.css'

const CardExample = () => {
  const aktNews = useStaticQuery(graphql`
    query News {
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
    <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">


  <div class="controls-top">
    <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fas fa-chevron-left"></i></a>
    <a class="btn-floating" href="#multi-item-example" data-slide="next"><i class="fas fa-chevron-right"></i></a>
  </div>


  <ol class="carousel-indicators">
    <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
    <li data-target="#multi-item-example" data-slide-to="1"></li>
    <li data-target="#multi-item-example" data-slide-to="2"></li>
  </ol>
<div class="carousel-inner" role="listbox">
  <div class="carousel-item active">
  {aktNews.allContentfulAktuelles.edges.map((edge) =>{
      return(
        <div class="col-md-4">
        <div class="card mb-4">
          <img src={edge.node.teaser.fluid.src} alt="Card" />
          <div class="card-body">
            <h4 class="card-title">{edge.node.title}</h4>
            <p class="card-text">{documentToReactComponents(edge.node.inhalt.json)}</p>
            <a href='#!' className='black-text d-flex justify-content-end'>
              <h5>
                Weiter lesen
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a>
          </div>
        </div>
      </div>

      )
    })}
    </div>
    </div>
    </div>
  )
}

export default CardExample
