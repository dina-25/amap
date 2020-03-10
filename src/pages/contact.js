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
      <SEO title="Kontakt" />
  <div className={mapStyling.bodyWrap}>
  <div className={mapStyling.leftColumn}>
    <p className={mapStyling.headers}>Kontakt</p>
    <hr className={mapStyling.underline}/>
    <table>
      <tbody className={mapStyling.tableContact}>
        <tr>
          <td>Adresse</td>
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
          <td><a href="mailto:info@amap.de">info@amap.de</a></td>
        </tr>
      </tbody>
    </table>
    <p className={mapStyling.headers}>Bewerbung</p>
    <hr className={mapStyling.underline}/>
    <p className={mapStyling.contactTitles}>als Mitarbeiter in einem Forschungs-/Entwicklungsprojekt</p>
    <hr/>
    <p className={mapStyling.text}>Ihre Bewerbung schicken Sie bitte</p>
    <ol className={mapStyling.oListStyling}>
      <li><FontAwesomeIcon icon={faArrowAltCircleRight} className={mapStyling.arrow}/> an die beteiligten Industriefirmen und/oder</li>
      <li><FontAwesomeIcon icon={faArrowAltCircleRight} className={mapStyling.arrow}/> an die beteiligten RWTH-Institute</li>
    </ol>
    <p className={mapStyling.headers}>Mitgliedschaft</p>
    <hr className={mapStyling.underline}/>
    <p className={mapStyling.contactTitles}>als Partner im Forschungscluster AMAP</p>
    <hr/>
    <p>Ihre Anfragen richten Sie bitte</p>
    <ol className={mapStyling.oListStyling}>
      <li><FontAwesomeIcon icon={faArrowAltCircleRight} className={mapStyling.arrow}/> an die Geschäftsführung der AMAP GmbH</li>
    </ol>
  </div>
    <div className={mapStyling.rightColumn}>
      <div className={mapStyling.leafletMapStyle}>
        <p className={mapStyling.headers}>So finden Sie AMAP</p>
        <hr className={mapStyling.underline}/>
        <p className={mapStyling.contactTitles}>Anfahrt</p>
        <Map />
      </div>
    </div>
  </div>
      </Layout>
    </div>
  )
}

export default ContactPage
