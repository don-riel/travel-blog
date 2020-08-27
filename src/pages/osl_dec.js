import React from 'react';
import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import Blog_Oslo_in_Dec from '../components/page-layouts/blog-oslo-in-dec/blog-oslo-in-dec-layout'


const Blog = () => {
    return (
    <Layout>
            <SEO title="About Me" />
            <Blog_Oslo_in_Dec />
            <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
}

export default Blog;
