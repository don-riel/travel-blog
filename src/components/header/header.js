import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"

import Nav from '../nav-link/nav-link'

import styles from './header-styles.module.css'


const Header = ({ siteTitle, siteAuthor }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = (event) => {
    console.log(navOpen)
    console.log(event.target.className)
    setNavOpen(!navOpen)
    console.log(navOpen)
  }

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
          <p 
            className={styles.author}>by {siteAuthor}
          </p>
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
