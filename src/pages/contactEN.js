import React from 'react'
import Layout from '../components/layout'
import Map from '../components/mapComp'
import mapStyling from '../styles/map.module.scss'
import SEO from '../components/seo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const ContactPage = () => {
  return (
    <div>
      <Layout>
      <SEO title="Contact" />
  <div className={mapStyling.bodyWrap}>
  <div className={mapStyling.leftColumn}>
    <p className={mapStyling.headers}>Contact</p>
    <hr className={mapStyling.underline}/>
    <table>
      <tbody className={mapStyling.tableContact}>
        <tr>
          <td>Address</td>
          <td>Schurzlterstraße 570
              52074 Aachen
          </td>
        </tr>
        <tr>
          <td> Tel.</td>
          <td><a href="tel:+491722527212">+49-172-2527212 </a><br/>
          <a href="tel:+4915730878676">+49-157-30878676</a></td>
        </tr>
        <tr>
          <td>Fax</td>
          <td>+49-241-80626229</td>
        </tr>
        <tr>
          <td>E-mail</td>
          <td><a href="mailto:info@amap.de">info[@]amap.de</a></td>
        </tr>
      </tbody>
    </table>
    <p className={mapStyling.headers}>Application</p>
    <hr className={mapStyling.underline}/>
    <p className={mapStyling.contactTitles}>for employment in R&D projects</p>
    <hr/>
    <p className={mapStyling.text}>Please address your inquiry in writing or by e-mail to</p>
    <ol className={mapStyling.oListStyling}>
      <li><FontAwesomeIcon icon={faArrowAltCircleRight} className={mapStyling.arrow}/> envolved partner industry companies and/or</li>
      <li><FontAwesomeIcon icon={faArrowAltCircleRight} className={mapStyling.arrow}/> envolved partner institutes of RWTH university.</li><br/>
    </ol>
    <p className={mapStyling.headers}>Membership</p>
    <hr className={mapStyling.underline}/>
    <p className={mapStyling.contactTitles}>as partner in research cluster AMAP GmbH</p>
    <hr/>
    <p>Please address your inquiry in writing or by e-mail to</p>
    <ol className={mapStyling.oListStyling}>
      <li><FontAwesomeIcon icon={faArrowAltCircleRight} className={mapStyling.arrow}/> AMAP management.</li>
    </ol>
  </div>
    <div className={mapStyling.rightColumn}>
      <div className={mapStyling.leafletMapStyle}>
        <p className={mapStyling.headers}>How to find AMAP</p>
        <hr className={mapStyling.underline}/>
        <p className={mapStyling.contactTitles}>Directions</p>
        <Map />
      </div>
    </div>
  </div>
      </Layout>
    </div>
  )
}

export default ContactPage
