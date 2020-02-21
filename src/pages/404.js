import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 style={{display: `none`}}>Page Not Found</h1>
    <div style={{ 
           width: `85%`, 
           margin: `auto auto`, 
           verticalAlign: `middle`}}>Sorry, this page does not exist.</div>
  </Layout>
)

export default NotFoundPage
