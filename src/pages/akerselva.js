import React from 'react';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Sidebar from '../components/sidebar'

import Blog_Akerselva from '../components/page-layouts/blog-akerselva/blog-akerselva-layout'


const Blog = () => {
    return (
    <Layout>
            <SEO title="Akerselva" />
            <Sidebar>
                <Blog_Akerselva />
            </Sidebar>
            
    </Layout>
    )
}

export default Blog;
