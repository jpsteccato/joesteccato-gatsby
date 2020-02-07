import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Sketch from '../components/sketch';
import sketch from '../scripts/phi';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{display:`none`}}>Home</h1>
    <div style={{ width: `90%`, margin: `auto auto`, height: 500, verticalAlign: `middle`}}>
    	<Sketch sketch={sketch} /> 


        <div 
    		style={{ 
    			margin: `auto`, 
    			verticalAlign: `middle`}}>
                </div>
    </div>
  </Layout>
)

export default IndexPage
