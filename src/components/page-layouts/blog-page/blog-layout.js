import React from "react"
import BlogPreview from "../../blog-item-preview/blog-item-preview"
import BlogPreviewdata from "../../../queries/blog-preview-data"
import getImgFluid from "../../../utils/imgFluid.utils"

import styles from "./blog-layout-styles.module.css"

export default function BlogPage() {
  const data = BlogPreviewdata()

  return (
    <div className={styles.layout}>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        let imgData = getImgFluid(data, node.frontmatter.place)

        return (
          <div key={node.id} className={styles.preview_items}>
            <BlogPreview
              imgData={imgData}
              title={node.frontmatter.title}
              body={node.frontmatter.intro}
              date={node.frontmatter.date}
              toLink={`${"/"}${node.frontmatter.place}`}
            />
          </div>
        )
      })}
    </div>
  )
}
