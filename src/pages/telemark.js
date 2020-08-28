import React from 'react';
import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import Blog_Telemark from '../components/page-layouts/blog-telemark/blog-telemark-layout'


const Blog = () => {
    return (
    <Layout>
            <SEO title="About Me" />
            <Blog_Telemark />
            <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
}

export default Blog;
