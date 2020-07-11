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
          Hey! I'm a developer / digital marketer. I love water polo, sufing,
          and technology! 🤽🏽‍♀
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
          - building platforms for:{" "}
          <a
            href="https://stuff.bpmct.net/Kuringen-Bryggehotell-9b78d4845625483994fca3b22947f947"
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
            href="https://stuff.bpmct.net/RIT-Hangout-0ad032304d684b41957ac776d0191e42"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="badge badge-warning">
              <span role="img" aria-label="">
                👨‍👩‍👦
              </span>{" "}
              RIT Hangout
            </span>
          </a>{" "}
          <a
            href="https://stuff.bpmct.net/Donut-Delivery-App-d0c4e53dfb824a2b9f8ae00c6b3474c1"
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
            href="https://stuff.bpmct.net/CodeStream-5af0929e43724dee9342ef1e2bb07bf4"
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
            href="https://stuff.bpmct.net/coding-1a541003e0b2497a9d1a996c2f3a37db"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="badge badge-warning">@coding</span>
          </a>{" "}
        </p>
        <p>
          - and doing some other{" "}
          <a href="https://stuff.bpmct.net/" target="_blank">
            fun projects
          </a>
          .
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
          <a href="https://stuff.bpmct.net" className="text-muted">
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
