import React from 'react';


import Layout from '../components/layout'
import SEO from '../components/seo'

import Sidebar from '../components/sidebar'
import Blog_Oslo_in_Dec from '../components/page-layouts/blog-oslo-in-dec/blog-oslo-in-dec-layout'


const Blog = () => {
    return (
    <Layout>
            <SEO title="Oslo in December" />
            <Sidebar>
                <Blog_Oslo_in_Dec />
            </Sidebar>
            

    </Layout>
    )
}

export default Blog;
