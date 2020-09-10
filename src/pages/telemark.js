import React from 'react';


import Layout from '../components/layout'
import SEO from '../components/seo'

import Sidebar from '../components/sidebar'
import Blog_Telemark from '../components/page-layouts/blog-telemark/blog-telemark-layout'


const Blog = () => {
    return (
    <Layout>
            <SEO title="Telemark" />
            <Sidebar>
                <Blog_Telemark />
            </Sidebar>
            

    </Layout>
    )
}

export default Blog;
