import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact me" />
    <h1>📧 Contact me</h1>
    <hr />
    <p>
      Email: <a href="me@bpmct.net">me@bpmct.net</a>
    </p>
    <p>
      GitHub: <a href="https://github.com/bpmct">@bpmct</a>
    </p>
    <p>
      Instagram: <a href="https://instagram.com/bpmct">@bpmct</a>
    </p>
    <p>
      Twitter: <a href="https://twitter.com/bpmct">@bpmct</a>
    </p>
    <hr />
    <Link to="/">⬅ Go back to the homepage</Link>
  </Layout>
)

export default Contact
