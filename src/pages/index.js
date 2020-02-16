import React from "react"
import { Link } from "gatsby"

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Sketch from '../components/sketch';
import sketch from '../scripts/pen';

const DrawBox = () => {
  return (
        <div  style={{ width: `100%`, height: `400px`}}>
          <Sketch sketch={sketch}/>
          <div style={{textAlign: `center`}}>[Click and Drag Inside ^]</div>
        </div>
    )
}

const AboutBox = () => {
  return (
    
       <div style={{marginTop: `3.0rem`}}>
         <h2 style={{display: `none`, textAlign: `center`}}>About Joe</h2>
         <div style={{ width: `90%`, margin: `auto auto`, height: 400, verticalAlign: `middle`}}>
           <div style={{ margin: `auto`, verticalAlign: `middle`}}>
             Joe Steccato is a software engineer, creative coder, and musician based in New York.  
           </div>
         </div>
       </div>
  )
}

const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    <h1 style={{display:`none`}}>Home</h1>
    <div style={{ width: `90%`, margin: `auto auto`, verticalAlign: `middle`}}>
      <OwlCarousel
          className="owl-theme"
          items={1}
          dots={true}
          nav={false}
          mouseDrag={false}
          touchDrag={false}
        >
        <DrawBox/>
        <AboutBox/>
      </OwlCarousel>
      
    </div>
  </Layout>
)

export default IndexPage
