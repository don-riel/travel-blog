import React from "react"
import Layout from "../components/layout"
import BlogPage from "../components/page-layouts/blog-page/blog-layout"
import SEO from "../components/seo"

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blogs" />
      <BlogPage />
    </Layout>
  )
}

export default Blog
