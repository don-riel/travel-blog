import React from 'react';
import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import Blog_Bergen from '../components/page-layouts/blog-bergen/blog-bergen-layout'


const Blog = () => {
    return (
    <Layout>
            <SEO title="About Me" />
            <Blog_Bergen />
            <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
}

export default Blog;
