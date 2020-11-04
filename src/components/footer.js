import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import footerStyles from '../styles/footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `)

  return(
    <footer className={footerStyles.footer}>
    <div className={footerStyles.footerText}>
      <p>&copy; {data.site.siteMetadata.author} <br />
          Alle Rechte vorbehalten.</p>
    </div>
    <div className={footerStyles.wrap}>
      <ul className={footerStyles.menuFooter}>
        <li>
              <Link className={footerStyles.footerItem} to="/contact">Kontakt</Link>
        </li>
        <li>
            <Link className={footerStyles.footerItem} to="/impressum">Impressum</Link>
        </li>
        <li>
            <Link className={footerStyles.footerItem} to="/datenschutz">Datenschutz</Link>
        </li>
        <li>
              <Link className={footerStyles.footerItem} to="/antitrustReminder">Antitrust Reminder</Link>
        </li>
      </ul>
     </div>
    </footer>
  )
}

export default Footer
