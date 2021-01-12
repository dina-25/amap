import React from "react"
import Layout from "../components/layoutDE"
import SEO from "../components/seo"
import partnerStyles from '../styles/partner.module.scss'
import listStyles from '../styles/project.module.scss'

const NotFoundPage = (props) => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={partnerStyles.wrapper}>
    <h1>NOT FOUND</h1>
    <p className={listStyles.postStyle}>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
