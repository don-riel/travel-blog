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
    <div
      className={styles.header_content}  
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
        <button 
          aria-label="Open navigation" 
          className={`${styles.nav_open} ${navOpen ? styles.hidden : ""} ${styles.nav_dropDown_btn}`} 
          onClick={toggleNav} 
        >
          &#9776;
        </button>

        <div 
          className={`${styles.nav} ${navOpen ? styles.nav_open : "" }`}
        >
          <button 
            aria-label="Close navigation" 
            className={styles.close_nav} 
            onClick={toggleNav}
          >
            &times;
          </button> 
          <Nav />
        </div>
    </div>
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
