import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Hi, I'm Ben Potter" />
    <div className="row">
      <div className="col-12 col-lg-4">
        <Img fluid={data.image1.childImageSharp.fluid} alt="" />
      </div>
      <div className="col-12 col-lg-8">
        <h1 className="bpmct-title">
          <Link to="/">Ben Potter</Link>
        </h1>
        <p>
          Hey! I'm a developer / digital marketer. I love water polo, surfing,
          and hacking things together with technology.
        </p>
        <p>
          I work at{" "}
          <a href="https://coder.com" target="_blank" rel="noreferrer">
            Coder
          </a>
          , we're building the future of software development{" "}
          <span role="img" aria-label="">
            ☁️
          </span>
        </p>
        <h4>What I'm up to:</h4>
        <hr />
        <div class="row">
          <div className="col-12 col-md-4 mb-4">
            <div className="card border-primary">
              <div className="card-header">Coffee &amp; Coder ☕</div>
              <div className="card-body">
                <div className="d-block d-lg-none d-xl-block">
                  Monthly Coder live series!
                </div>
                <div class="text-right">
                  <a
                    href="https://coder.zoom.us/webinar/register/5316058452097/WN_vRpi-_r8SJ-qVvEdTaN1lA"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    Join one
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card border-warning">
              <div className="card-header">Hangout</div>
              <div className="card-body">
                <div className="d-block d-lg-none d-xl-block">
                  A project with some friends!
                </div>
                <div class="text-right">
                  <a
                    href="https://hangoutbeta.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-warning"
                  >
                    See the app
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card border-danger">
              <div className="card-header">@coding</div>
              <div className="card-body">
                <div className="d-block d-lg-none d-xl-block">
                  My coding Instgram page!
                </div>
                <div class="text-right">
                  <a
                    href="https://instagram.com/coding"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-danger"
                  >
                    Check it out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
      </div>
    </div>
    <p className="text-right">
      <a href="https://instagram.com/bpmct" className="text-muted">
        <FaInstagram />
      </a>{" "}
      <a href="https://github.com/bpmct" className="text-muted">
        <FaGithub />
      </a>{" "}
      <a href="https://twitter.com/bpmct" className="text-muted">
        <FaTwitter />
      </a>
      &nbsp; | &nbsp;
      <a href="https://bpmct.net/blog" className="text-muted">
        Blog
      </a>
      {/* &nbsp; | &nbsp;
      <a href="https://stuff.bpmct.net" className="text-muted">
        Portfolio
      </a> */}
      &nbsp; | &nbsp;
      <Link to="/contact" className="text-muted">
        Contact
      </Link>
    </p>
  </Layout>
)

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "ben.jpeg" }) {
      ...squareImage
    }
  }
`

export default IndexPage
