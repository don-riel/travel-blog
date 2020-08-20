/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"


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

  return (
    
    <div>
        <Header siteTitle={data.site.siteMetadata.title} />
          <div className={styles.body}>
              <main>{children}</main>
          </div>
          <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
      </div>
      
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


