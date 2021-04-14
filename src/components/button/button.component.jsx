import React from "react"
import { Link } from "gatsby"

import styles from "./button-styles.module.css"

const LargeButton = ({ children, link }) => {
  return (
    <div className={styles.button_large}>
      <Link
        to={link}
        className={styles.button_large_link}
        activeClassName={styles.active}
      >
        {children}
      </Link>
    </div>
  )
}

export const WidgetButton = ({ children, link }) => {
  return (
    <div className={styles.button_small}>
      <Link to={link} className={styles.button_small_link}>
        {children}
      </Link>
    </div>
  )
}

export default LargeButton
