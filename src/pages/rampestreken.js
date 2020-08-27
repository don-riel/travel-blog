import React from 'react';
import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import Blog_Rampestreken from '../components/page-layouts/blog-rampestreken/blog-rampestreken-layout'


const Blog = () => {
    return (
    <Layout>
            <SEO title="About Me" />
            <Blog_Rampestreken />
            <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
}

export default Blog;
