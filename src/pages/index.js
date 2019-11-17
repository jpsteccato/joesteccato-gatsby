import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "typeface-noto-sans";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <div style={{ width: `90%`, margin: `1.45rem auto`, height: 500, }}>
    	Welcome to the homepage of software engineer and composer Joe Steccato.
    </div>
  </Layout>
)

export default IndexPage
