import React from 'react';
import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import Blog_Kongens_Utsikt from '../components/page-layouts/blog-kongens-utsikt/blog-kongens-utsikt-layout'


const Blog = () => {
    return (
    <Layout>
            <SEO title="About Me" />
            <Blog_Kongens_Utsikt />
            <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
}

export default Blog;
