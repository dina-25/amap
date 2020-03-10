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
            <Link className={footerStyles.footerItem} to="/Impressum">Impressum</Link>
        </li>
        <li>
            <Link className={footerStyles.footerItem} to="/datenSchutz">Datenschutz</Link>
        </li>
        <li>
              <Link className={footerStyles.footerItem} to="/antitrust">Antitrust Reminder</Link>
        </li>
      </ul>
     </div>
    </footer>
  )
}

export default Footer
