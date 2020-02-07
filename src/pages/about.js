import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "typeface-noto-sans";

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <h1 style={{display:`none`}}>About Joe</h1>
    <div style={{ width: `90%`, margin: `auto auto`, height: 500, verticalAlign: `middle`}}>
    	<span 
    		style={{ 
    			margin: `auto`, 
    			verticalAlign: `middle`}}>Joe Steccato is a software engineer, creative coder, and musician based in New York.  
                Joe helps digital artists realize the engineering requirements and possibilites of their media-based works.
                He is also a music composer and producer.  
                </span>
    </div>
  </Layout>
)

export default IndexPage
