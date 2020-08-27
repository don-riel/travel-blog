import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Nav from '../nav-link/nav-link'

import styles from './header-styles.module.css'


const Header = ({ siteTitle }) => {
  
  return (
    <header
      className={styles.header}
    >
      <div>
        <h2 style={{ margin: 0 }}>
            <Link
              className={styles.title}
              to="/"
            >
              {siteTitle}
            </Link>
          </h2>
         
      </div>
      <Nav className={styles.nav_link} />     
   
  </header>
  )
  
  
 }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
