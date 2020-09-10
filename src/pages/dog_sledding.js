import React from 'react';


import Layout from '../components/layout'
import SEO from '../components/seo'

import Sidebar from '../components/sidebar'
import Blog_DogSledding from '../components/page-layouts/blog-dog-sledding/blog-dog-sledding-layout'


const Blog = () => {
    return (
    <Layout>
            <SEO title="Dog sledding in Tromsø" />
            <Sidebar>
                <Blog_DogSledding />
            </Sidebar>
            
    </Layout>
    )
}

export default Blog;
