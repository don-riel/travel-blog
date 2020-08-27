import React from 'react';
import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import Blog_Autumn_Oslo from '../components/page-layouts/blog-autumn-oslo/autumn-oslo-layout'


const Blog = () => {
    return (
    <Layout>
            <SEO title="About Me" />
            <Blog_Autumn_Oslo />
            <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
}

export default Blog;
