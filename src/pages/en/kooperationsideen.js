import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../components/layout'
import partnerStyles from '../../styles/partner.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import mapStyling from '../../styles/map.module.scss'
import homeStyle from '../../styles/home.module.scss'




const Kooperationsideen = () => {


  return (
    <div>
    <Layout>
      <SEO title="Cooperation Ideas" />
      <div className={partnerStyles.wrapper}>
        <h3 className={homeStyle.titleStyling}>Cooperation Ideas</h3>
        <p className={partnerStyles.addressStyling}>Are you interested in a cooperation, in one of our projects and/or do you have your own pre-competitive project ideas that you would like to implement with us?
Please contact us via our e-mail address: <a href="mailto:info@amap.de">info[at]amap.de</a></p>
        <h3 className={homeStyle.titleStyling}>Projects in preparation</h3>
        <p className={partnerStyles.addressStyling}><FontAwesomeIcon icon={faArrowAltCircleRight} className={mapStyling.arrow}/> P25 - Optimization of aluminium sheet with special emphasis on tribology and visual appearance</p>
        <p className={partnerStyles.addressStyling}><FontAwesomeIcon icon={faArrowAltCircleRight} className={mapStyling.arrow}/> P26 - Influence of Cold Flakes on the Tensile and Fatigue Strength of Aluminum High Pressure Die Castings</p>
        <p className={partnerStyles.addressStyling}><FontAwesomeIcon icon={faArrowAltCircleRight} className={mapStyling.arrow}/> P27 - Heat-treatment-free Al alloys</p>
        <p className={partnerStyles.addressStyling}><FontAwesomeIcon icon={faArrowAltCircleRight} className={mapStyling.arrow}/> P28 - Iron Removal from Aluminum and its Alloys</p>
        <p className={partnerStyles.addressStyling}><FontAwesomeIcon icon={faArrowAltCircleRight} className={mapStyling.arrow}/> P(X) - Standard samples of melt cleanliness</p>
      </div>
    </Layout>
    </div>
  )
}

export default Kooperationsideen
