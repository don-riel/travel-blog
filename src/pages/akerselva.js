import React from 'react';
import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import Blog_Akerselva from '../components/page-layouts/blog-akerselva/blog-akerselva-layout'


const Blog = () => {
    return (
    <Layout>
            <SEO title="About Me" />
            <Blog_Akerselva />
            <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
}

export default Blog;
