import React from 'react';


import Layout from '../components/layout'
import SEO from '../components/seo'

import Sidebar from '../components/sidebar'
import Blog_Rampestreken from '../components/page-layouts/blog-rampestreken/blog-rampestreken-layout'


const Blog = () => {
    return (
    <Layout>
            <SEO title="Rampestreken" />
            <Sidebar>
                <Blog_Rampestreken />
            </Sidebar>
           

    </Layout>
    )
}

export default Blog;
