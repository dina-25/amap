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
          All rights reserved.</p>
    </div>
    <div className={footerStyles.wrap}>
      <ul className={footerStyles.menuFooter}>
        <li>
              <Link className={footerStyles.footerItem} to="/en/contact">Contact</Link>
        </li>
        <li>
            <Link className={footerStyles.footerItem} to="/en/impressum">Legal Notice</Link>
        </li>
        <li>
            <Link className={footerStyles.footerItem} to="/en/datenschutz">Privacy Policy</Link>
        </li>
        <li>
              <Link className={footerStyles.footerItem} to="/en/antitrustReminder">Antitrust Reminder</Link>
        </li>
      </ul>
     </div>
    </footer>
  )
}

export default Footer
