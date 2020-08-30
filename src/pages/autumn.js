import React from 'react';

import Layout from '../components/layout'
import SEO from '../components/seo'

import Sidebar from '../components/sidebar'
import Blog_Autumn_Oslo from '../components/page-layouts/blog-autumn-oslo/autumn-oslo-layout'


const Blog = () => {
    return (
    <Layout>
            <SEO title="About Me" />
            <Sidebar>
                <Blog_Autumn_Oslo />
            </Sidebar>
            

    </Layout>
    )
}

export default Blog;
