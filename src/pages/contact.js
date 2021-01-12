import React from 'react'
import Layout from '../components/layoutDE'
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
        <div class="container-fluid">
          <div class="row justify-content-left ">
            <div class="col-xs-14 col-sm-12 col-md-9 col-lg-6 col-xl-6 mr-auto" >
    <h3 className={mapStyling.headers}>Kontakt</h3>
    <table className={mapStyling.tableStyle}>
      <tbody className={mapStyling.tableContact}>
        <tr>
          <td>Adresse</td>
          <td>Schurzelterstraße 570,
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
          <td><a href="mailto:info@amap.de">info[at]amap.de</a></td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="col-xs-14 col-sm-12 col-md-9 col-lg-6 col-xl-5" >
      <div className={mapStyling.leafletMapStyle}>
  <h3 className={mapStyling.headers}>So finden Sie AMAP</h3>
  <p className={mapStyling.contactTitles}>Anfahrt</p>
  <Map />
    </div>
    </div>
    </div>
    </div>

    <div class="row justify-content-left ">
      <div class="col-xs-14 col-sm-12 col-md-9 col-lg-6 col-xl-6 " >
    <h3 className={mapStyling.headers}>Bewerbung</h3>
    <p className={mapStyling.contactTitles}>als Mitarbeiter in einem Forschungs-/ Entwicklungsprojekt</p>
    <hr/>
    <p className={mapStyling.text}>Ihre Bewerbung schicken Sie bitte</p>
    <ol className={mapStyling.oListStyling}>
      <li><FontAwesomeIcon icon={faArrowAltCircleRight} className={mapStyling.arrow}/> an die beteiligten Industriefirmen und/oder</li>
      <li><FontAwesomeIcon icon={faArrowAltCircleRight} className={mapStyling.arrow}/> an die beteiligten RWTH-Institute</li><br/>
    </ol>
    </div>
    </div>

    <div class="row justify-content-start">
      <div class="col-xs-12 col-sm-12 col-md-9 col-lg-5 col-xl-6" >
    <h3 className={mapStyling.headers}>Mitgliedschaft</h3>
    <p className={mapStyling.contactTitles}>als Partner im Forschungscluster AMAP</p>
    <hr/>
    <p className={mapStyling.text}>Ihre Anfragen richten Sie bitte</p>
    <ol className={mapStyling.oListStyling}>
      <li><FontAwesomeIcon icon={faArrowAltCircleRight} className={mapStyling.arrow}/> an die Geschäftsführung der AMAP GmbH</li>
    </ol>
  </div>
  </div>
</div>

      </Layout>
    </div>
  )
}

export default ContactPage
