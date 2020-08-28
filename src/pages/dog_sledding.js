import React from 'react';
import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import Blog_DogSledding from '../components/page-layouts/blog-dog-sledding/blog-dog-sledding-layout'


const Blog = () => {
    return (
    <Layout>
            <SEO title="About Me" />
            <Blog_DogSledding />
            <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
}

export default Blog;
