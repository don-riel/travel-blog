import React from 'react';
import { Link } from "gatsby"

import Layout from '../components/layout'
import BlogPage from '../components/page-layouts/blog-page/blog-layout'
import SEO from '../components/seo'


const Blog = () => {
    return (
    <Layout>
            <SEO title="About Me" />
            < BlogPage />
            <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
}

export default Blog;
