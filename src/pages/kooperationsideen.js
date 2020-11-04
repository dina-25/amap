import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layoutDE'
import partnerStyles from '../styles/partner.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import mapStyling from '../styles/map.module.scss'
import homeStyle from '../styles/home.module.scss'



const Kooperationsideen = () => {


  return (
    <div>
    <Layout>
      <SEO title="Kooperationsideen" />
      <div className={partnerStyles.wrapper}>
        <h3 className={homeStyle.titleStyling}>Kooperationsideen</h3>
        <p className={partnerStyles.addressStyling}>Sind Sie an einer Zusammenarbeit, an einem unserer Projekte interessiert und/oder haben Sie eigene vorwettbewerbliche Projektideen, die Sie mit uns umsetzen wollen?
Bitte kontaktieren Sie uns über unsere Mail-Adresse: <a href="mailto:info@amap.de">info[@]amap.de</a></p>
        <h3 className={homeStyle.titleStyling}>Projekte in Vorbereitung</h3>
        <p className={partnerStyles.addressStyling}><FontAwesomeIcon icon={faArrowAltCircleRight} className={mapStyling.arrow}/> P25 - Optimization of aluminium sheet with special emphasis on tribology and visual appearance</p>
        <p className={partnerStyles.addressStyling}><FontAwesomeIcon icon={faArrowAltCircleRight} className={mapStyling.arrow}/> P26 - Influence of Cold Flakes on the Tensile and Fatigue Strength of Aluminum High Pressure Die Castings</p>
        <p className={partnerStyles.addressStyling}><FontAwesomeIcon icon={faArrowAltCircleRight} className={mapStyling.arrow}/> P27 - Heat-treatment-free Al alloys</p>
        <p className={partnerStyles.addressStyling}><FontAwesomeIcon icon={faArrowAltCircleRight} className={mapStyling.arrow}/> P(X) - Standard samples of melt cleanliness</p>
      </div>
    </Layout>
    </div>
  )
}

export default Kooperationsideen
