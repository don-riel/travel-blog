import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import styles from "./blog-item-styles.module.css"

const BlogPreview = ({ imgData, title, date, toLink }) => {
  return (
    <Link to={toLink} className={styles.link}>
      <div className={styles.blog}>
        <Img fluid={imgData} className={styles.blog_img} />
        <div className={styles.blog_content}>
          <div className={styles.blog_header}>
            <p className={styles.blog_title}>{title}</p>
            <p className={styles.date}>{date}</p>
            {/* <p className={styles.blog_body}>{body}</p> */}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogPreview
