import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import LayoutStyles from '../styles/layout.module.scss'
import headerStyles from '../styles/header.module.scss'

const Layout = (props) => {
   const data = useStaticQuery(graphql`
     query{
       contentfulAsset(title: {eq: "HeaderPhoto"}) {
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
        <Header />
          {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
