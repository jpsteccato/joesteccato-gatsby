import React from "react"
import { Link } from "gatsby"
import { useMediaQuery } from 'react-responsive'
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
        <div id="p5-pen-sketch" style={{ width: `100%`}}>
          <Sketch sketch={sketch}/>
          <div 
            style={{
              textAlign: `center`, 
              fontSize: `0.75rem`, 
              opacity: `0.7`, 
              marginBottom: `2rem`
            }}>
            [Click and Drag Inside ^] <div id="p5-pen-clear" 
          style={{
            display: `inline`,
            fontSize: `0.6rem`, 
            border: `solid 1px #2FDE04FF`,
            padding: `2px 3px`,
            width: `50px`

          }}>CLEAR</div>

          </div>
          
        </div>
    )
}

const AboutBox = () => {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' });

  return (
       <div height="100%" style={{marginTop: isMobileOrTablet ? `0.0rem` : `3.0rem`, height: `100%`}}>
         <h2 style={{
            textAlign: `center`, 
            marginBottom: `1.0rem`,
            display: isMobileOrTablet ? `none` : `block`
          }}>About Joe</h2>
         <div style={{ width: `90%`, margin: `auto auto`, verticalAlign: `middle`}}>
           <p style={{ margin: `auto auto 1.0rem auto`, verticalAlign: `middle`, fontSize: `0.8rem`}}>
             Joe Steccato is a software engineer, creative coder, and composing musician based in New York.
             He bridges his talents for art and technology to create and enhance digital interactions 
             of all kinds. 
           </p>
           <p style={{ margin: `auto auto 1.0rem auto`, verticalAlign: `middle`, fontSize: `0.8rem`}}>
             Joe has collaborated with artists, businesses, and individuals to offer engineering guidance
             in a wide range of digital systems--from business operations and management, to interactive art installations.
           </p>
         </div>
       </div>
  )
}

const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    <h1 style={{display:`none`}}>Home</h1>
    <div style={{ width: `100%`, margin: `auto auto`, verticalAlign: `middle`}}>
      <OwlCarousel
          className="owl-theme"
          items={1}
          dots={true}
          nav={false}
          mouseDrag={false}
          touchDrag={false}
          dotsSpeed={700}

        >
        <DrawBox/>
        <AboutBox/>
      </OwlCarousel>
      
    </div>
  </Layout>
)

export default IndexPage
