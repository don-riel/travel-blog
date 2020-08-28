import React from 'react';
import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import Blog_EndOfTheWorld from '../components/page-layouts/blog-endOfTheWorld/blog-endOfTheWorld-layout'


const Blog = () => {
    return (
    <Layout>
            <SEO title="About Me" />
            <Blog_EndOfTheWorld />
            <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
}

export default Blog;
