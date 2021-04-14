import React from "react"

import WidgetBlog from "../widget-item/widget-blog"
import LatestBlogs from "../../queries/latest-blog"

import getImgFluid from "../../utils/imgFluid.utils"
import styles from "./blog-widget-styles.module.css"

const BlogWidget = () => {
  const sidebar_item_data = LatestBlogs()
  return (
    <div className={styles.widget}>
      <div className={styles.widget_header}>
        <div className={styles.recent}>
          <h3>Recent</h3>
        </div>
        <div className={styles.title}>
          <h3>Blog Posts</h3>
        </div>
      </div>

      <div className={styles.widget_items}>
        {sidebar_item_data.allMarkdownRemark.edges.map(({ node }) => {
          let imgData = getImgFluid(sidebar_item_data, node.frontmatter.place)
          return (
            <div key={node.id} className={styles.widget_item}>
              <WidgetBlog
                title={node.frontmatter.title}
                imgData={imgData}
                body={node.frontmatter.intro}
                toLink={`${"/"}${node.frontmatter.place}`}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BlogWidget
