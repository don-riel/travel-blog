import React from 'react';
import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import Blog_WesternNorway from '../components/page-layouts/blog-western-noway/blog-western-norway-layout'


const Blog = () => {
    return (
    <Layout>
            <SEO title="About Me" />
            <Blog_WesternNorway />
            <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
}

export default Blog;
