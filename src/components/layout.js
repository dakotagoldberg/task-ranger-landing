import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  footerText,
  navBar,
  logotype,
} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'
const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header> */}
      <nav className={navBar}>
      <Link to="/">
        <StaticImage className={logotype} src='../images/logotype.png'/>
      </Link>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText} style={{ color: 'inherit', textDecoration: 'inherit'}}>
              Home
            </Link>
          </li>
          {/* <li className={navLinkItem}>
            <Link to="/about" className={navLinkText} style={{ color: 'inherit', textDecoration: 'inherit'}}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText} style={{ color: 'inherit', textDecoration: 'inherit'}}>
              Blog
            </Link>
          </li> */}
        </ul>
      </nav>
      <main>
        {/* <h1 className={heading}>{pageTitle}</h1> */}
        {children}
      </main>
      <div className={footerText}>© TaskRanger 2021</div>
    </div>
  )
}
export default Layout