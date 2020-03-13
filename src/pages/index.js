import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi people</h1> */}
    <p>Hi! My name is Ben. I do web design and social media stuff.</p>
    <p>
      This is an awful professional site, but it will get better over time. Good
      thing it's not live!
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
