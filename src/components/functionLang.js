import React from "react"
import {Link} from "gatsby"
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import headerStyles from '../styles/header.module.scss'


const LanguageSelector = ({location}) => {

  let pageName = typeof window !== "undefined" ? window.location.pathname: ""

  if(pageName.includes("/en")){
    pageName = pageName.split("/")[2]
  }


  let germanPagePath = `../../${pageName}`


  return(
    <div>
      <Link to={germanPagePath} className={headerStyles.menuItem} ><i class="de flag"></i></Link>
      <Link to="#" className={headerStyles.menuItem} ><i class="uk flag"></i></Link>
    </div>
  )
}

export default LanguageSelector
