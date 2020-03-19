import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About me" />
    <h1>A little bit about me....</h1>
    <hr />
    <p>Haven't made this yet haha</p>
    <Link to="/">⬅ Go back to the homepage</Link>
  </Layout>
)

export default About
