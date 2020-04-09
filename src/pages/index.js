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
      <div className="col-sm-6 col-md-4">
        <Img fluid={data.image1.childImageSharp.fluid} alt="" />
      </div>
      <div className="col-sm-6 col-md-8">
        <h1 className="bpmct-title">
          <Link to="/">Ben Potter</Link>
        </h1>
        <p>
          Hey! I'm a developer / digital marketer. I love water polo, surfing,
          and I'm lifeguarding this summer! ⛱
        </p>
        <h4>I do all sorts of work, but I'm currently:</h4>
        <p>
          - studying at:{" "}
          <a href="https://rit.edu" target="_blank" rel="noopener noreferrer">
            <span className="badge badge-warning">
              <span role="img" aria-label="">
                🏠
              </span>{" "}
              Rochester Institute of Technology
            </span>
          </a>
        </p>
        <p>
          - building websites for:{" "}
          <a
            href="https://kuringen.no"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="badge badge-danger">
              <span role="img" aria-label="">
                🛌
              </span>{" "}
              Kuringen Bryggehotel
            </span>
          </a>{" "}
          <a
            href="https://holeydonuts.shop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="badge badge-info">
              <span role="img" aria-label="">
                🍩
              </span>{" "}
              Holey Donuts
            </span>
          </a>
        </p>
        <p>
          - doing social media at:{" "}
          <a
            href="https://holeydonuts.shop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="badge badge-dark">
              <span role="img" aria-label="">
                👩‍💻
              </span>{" "}
              BuiltOn.Dev
            </span>
          </a>{" "}
          <a
            href="https://codestream.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="badge badge-primary">
              <span role="img" aria-label="">
                💻
              </span>{" "}
              CodeStream
            </span>
          </a>{" "}
          <a
            href="https://instagram.com/coding"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="badge badge-warning">@coding</span>
          </a>{" "}
        </p>
        <p>
          - and doing some other <Link to="/">fun projects</Link>.
        </p>
        <br />
        <hr />

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
          &nbsp; | &nbsp;
          <a href="https://ben.services" className="text-muted">
            Portfolio
          </a>
          &nbsp; | &nbsp;
          <Link to="/contact" className="text-muted">
            Contact
          </Link>
        </p>
      </div>
    </div>
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
