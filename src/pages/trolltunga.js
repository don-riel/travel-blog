import React from 'react';
import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import Blog_Trolltunga from '../components/page-layouts/blog-trolltunga/blog-trolltunga-layout'


const Blog = () => {
    return (
    <Layout>
            <SEO title="About Me" />
            <Blog_Trolltunga />
            <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
}

export default Blog;
