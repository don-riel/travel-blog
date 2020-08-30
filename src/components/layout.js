/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ScrollToTop from 'react-scroll-up'
// import Fade from 'react-reveal/Fade';

import Header from "./header/header"
import TopArrow from "../queries/topArrow"
import Footer from './footer/footer.component'

// import "./layout.css"
import  styles from "./global-styles.module.css"


const Layout = ({children }) => {


  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          author
        }
      }
    }
  `)

  const scroll_style = {
    color: 'black',
    transitionDuration: '0.5s',

  }

  return (
    
    <div>
        <Header siteTitle={data.site.siteMetadata.title} />
          <div className={styles.body}>
              <main>{children}</main>
              <ScrollToTop showUnder={160} style={scroll_style} >
               <span className={styles.scroll_style}>&#8679;</span>
              </ScrollToTop>
          </div>
         <Footer />
               
        
          
     </div>
      
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


