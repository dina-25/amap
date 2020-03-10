import React from 'react'
import SEO from "../components/seo"
import {Link, graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layout'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'



const UberUns = () => {


  return (
    <div>
    <Layout>
      <SEO title="Kooperationsideen" />


    </Layout>
    </div>
  )
}

export default UberUns
