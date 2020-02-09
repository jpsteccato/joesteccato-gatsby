import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Sketch from '../components/sketch';
import sketch from '../scripts/pen';

const DrawBox = () => {
  return (
        <div  style={{ width: `100%`, height: `420px`}}>
          <Sketch sketch={sketch}/>
        </div>
    )
}

const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    <h1 style={{display:`none`}}>Home</h1>
    <div style={{ width: `90%`, margin: `auto auto`, verticalAlign: `middle`}}>

      <DrawBox/>  

       <div 
    		style={{ 
    			margin: `auto`, 
    			verticalAlign: `middle`,
          textAlign: `center`,
          marginTop: `0.3rem`,
          fontSize: `0.4`
        }}>
          [Click inside ^]
         </div>
    </div>
  </Layout>
)

export default IndexPage
