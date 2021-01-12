import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Header from './DesktopNavbarAktuelles'
import Footer from './footer'
import PropTypes from "prop-types"
import '../styles/index.scss'
import LayoutStyles from '../styles/layout.module.scss'
import headerStyles from '../styles/header.module.scss'
import ScrollUp from './scrollButton'


const Layout = ({ children, intl }) => {
   const data = useStaticQuery(graphql`
     query{
       contentfulAsset(title: {eq: "HeaderPhoto"}, node_locale: {eq: "en"}) {
         title
         file {
           url
         }
       }
     }
   `)

  return (
    <div className={LayoutStyles.container}>
      <div className={LayoutStyles.content}>
        <img className={headerStyles.headerPic} src={data.contentfulAsset.file.url} alt={data.title} />
        <Header  />
        <main>{children}
          <ScrollUp/>
        </main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
