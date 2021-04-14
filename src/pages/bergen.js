import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sidebar from "../components/sidebar"
import Blog_Bergen from "../components/page-layouts/blog-bergen/blog-bergen-layout"

const Blog = () => {
  return (
    <Layout>
      <SEO title="Bergen by Train" />
      <Sidebar>
        <Blog_Bergen />
      </Sidebar>
    </Layout>
  )
}

export default Blog
