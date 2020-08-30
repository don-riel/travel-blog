import React from 'react';


import Layout from '../components/layout'
import SEO from '../components/seo'

import Sidebar from '../components/sidebar'
import Blog_Kongens_Utsikt from '../components/page-layouts/blog-kongens-utsikt/blog-kongens-utsikt-layout'


const Blog = () => {
    return (
    <Layout>
            <SEO title="About Me" />
            <Sidebar>
                <Blog_Kongens_Utsikt />
            </Sidebar>
            

    </Layout>
    )
}

export default Blog;
