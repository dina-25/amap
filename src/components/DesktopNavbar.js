import React from 'react';
import navStyles from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from '../styles/header.module.scss'

const StylingDesktopNav = navStyles.nav`
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;

        height: 40vh;

        .nav-links {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-evenly;
          aligh-items: center;

          width: 35vh;
          list-style: none;
        }

        .logo{
          display: block;
          margin-right: auto;
          margin-left: auto;
        }

        .link{
          color: #999999;
          font-size: 2.5vh;
          text-decoration: none;
        }
`

const DesktopNavbar = () => {

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

  return(
    <StylingDesktopNav>
      <div className="logo">
        <img className={headerStyles.headerPic} src={data.contentfulAsset.file.url} alt={data.title} />
      </div>
      <div className="nav">
      <ul className="nav-links">
        <li>
          <Link to="/" className="link">Home</Link>
        </li>
        <li>
          <Link to="/ueberUns" className="link">Partner</Link>
        </li>
        <li>
          <Link to="/projekte" className="link">Projekte</Link>
        </li>
        <li>
          <Link to="/termine" className="link">Termine</Link>
        </li>
        <li>
          <Link to="/newsroom" className="link">Newsroom</Link>
        </li>
      </ul>
    </div>
  </StylingDesktopNav>
  )
}

export default DesktopNavbar
