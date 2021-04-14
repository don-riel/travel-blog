import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sidebar from "../components/sidebar"
import Blog_EndOfTheWorld from "../components/page-layouts/blog-endOfTheWorld/blog-endOfTheWorld-layout"

const Blog = () => {
  return (
    <Layout>
      <SEO title="End of the World" />
      <Sidebar>
        <Blog_EndOfTheWorld />
      </Sidebar>
    </Layout>
  )
}

export default Blog
