import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sidebar from "../components/sidebar"
import Blog_Trolltunga from "../components/page-layouts/blog-trolltunga/blog-trolltunga-layout"

const Blog = () => {
  return (
    <Layout>
      <SEO title="Trolltunga Hike" />
      <Sidebar>
        <Blog_Trolltunga />
      </Sidebar>
    </Layout>
  )
}

export default Blog
