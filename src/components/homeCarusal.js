import React from 'react'
import {graphql, useStaticQuery } from 'gatsby'
import slideStyles from '../styles/header.module.scss'


const HomeCarosaul = () => {

  const data = useStaticQuery(graphql`

      query{
        contentfulHomeCarsaul{
          photo {
            fluid {
              src
              base64
            }
          }
        }
    }

    `)

    return(
      <div>
          <img alt="" className={slideStyles.homeCarusal} src={data.contentfulHomeCarsaul.photo.fluid.src}/>
      </div>
    )

}

export default HomeCarosaul
