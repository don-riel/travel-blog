import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sidebar from "../components/sidebar"
import Blog_WesternNorway from "../components/page-layouts/blog-western-noway/blog-western-norway-layout"

const Blog = () => {
  return (
    <Layout>
      <SEO title="Roadtrip to Western Norway" />
      <Sidebar>
        <Blog_WesternNorway />
      </Sidebar>
    </Layout>
  )
}

export default Blog
