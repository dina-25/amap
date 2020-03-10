import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import partnerStyles from '../styles/article.module.scss'


const PartnerTemp = (props) => {

  return(
    <Layout>
      <SEO title="Partner"/>
      <div className={partnerStyles.container}>
        <h1 className={partnerStyles.titleStyle}>{props.data.contentfulVollMitgliedsfirmen.mitglieder}</h1>
        <div className={partnerStyles.bodyStyle}>
          <img alt="" src={props.data.contentfulVollMitgliedsfirmen.poster.fluid.src} className={partnerStyles.imageStyle} />
          <address className={partnerStyles.inhaltStyle}>{documentToReactComponents(props.data.contentfulVollMitgliedsfirmen.address)} </address>
          <Link>{props.data.contentfulVollMitgliedsfirmen.link}</Link>
        </div>
      </div>
    </Layout>
  )

}

export default PartnerTemp
