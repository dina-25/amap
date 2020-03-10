import React from 'react'
import SEO from "../components/seo"
import {Link, graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layout'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import partnerStyles from '../styles/partner.module.scss'


const UberUns = () => {


  return (
    <div>
    <Layout>
      <SEO title="Unser Partner" />


    </Layout>
    </div>
  )
}

export default UberUns
