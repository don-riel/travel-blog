import React from "react"
import { Helmet } from "react-helmet"
import HomePage from "../components/page-layouts/home-page/home-layout"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Mr+De+Haviland&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <SEO title="Home" />
      <HomePage />
      {/* <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/about/">About Me</Link> <br />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Layout>
  )
}

export default IndexPage
