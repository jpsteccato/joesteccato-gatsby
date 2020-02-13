import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Sketch from '../components/sketch';
import sketch from '../scripts/pen';

const DrawBox = () => {
  return (
        <div  style={{ width: `100%`, height: `500px`}}>
          <Sketch sketch={sketch}/>
          <div style={{textAlign: `center`}}>[Click and Drag Inside ^]</div>
        </div>
    )
}

const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    <h1 style={{display:`none`}}>Home</h1>
    <div style={{ width: `90%`, margin: `auto auto`, verticalAlign: `middle`}}>

      <DrawBox/>  
      <div style={{display: `none`, marginTop: `3.0rem`}}>
         <h2 style={{textAlign: `center`}}>About Joe</h2>
         <div style={{ width: `90%`, margin: `auto auto`, height: 500, verticalAlign: `middle`}}>
           <div 
             style={{ 
               margin: `auto`, 
               verticalAlign: `middle`}}>
                    Joe Steccato is a software engineer, creative coder, and musician based in New York.  
             </div>
         </div>
        </div>
    </div>
  </Layout>
)

export default IndexPage
