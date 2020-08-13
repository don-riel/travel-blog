import React from 'react';
import { Link } from "gatsby"

import Layout from '../components/layout'
import AboutPage from '../components/page-layouts/about-page/about-layout'
import SEO from '../components/seo'


const About = () => {
    return (
    <Layout>
            <SEO title="About Me" />
            <AboutPage />
            <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
}

export default About;
