import React from "react"
// import { Link } from "gatsby"

import Loadable from '@loadable/component';
import { useMediaQuery } from 'react-responsive'
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import Sketch from '../components/sketch';
import sketch from '../scripts/pen';

const OwlCarousel = Loadable(() => import('react-owl-carousel'));

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
            [Click inside and drag] 
            <div id="p5-pen-save" 
              style={{
                display: `inline`,
                fontSize: `0.6rem`, 
                border: `solid 1px #2FDE04FF`,
                padding: `2px 3px`,
                width: `50px`,
                marginLeft: `4px`
              }}>SAVE</div>
            <div id="p5-pen-clear" 
              style={{
                display: `inline`,
                fontSize: `0.6rem`, 
                border: `solid 1px #2FDE04FF`,
                padding: `2px 3px`,
                width: `50px`,
                marginLeft: `4px`
              }}>CLEAR</div>
          </div>
          
        </div>
    )
}

const AboutBox = () => {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' });
  const heightSmall = useMediaQuery({ query: '(max-height: 580px)'})

  return(
       <div style={{marginTop: isMobileOrTablet ? `2.0rem` : `3.0rem`}}>
         <h2 style={{
            textAlign: `center`, 
            marginBottom: `1.0rem`,
            display: `none`
            // display: isMobileOrTablet ? `none` : `block`
          }}>About Joe</h2>
         <div style={{ 
           width: `85%`, 
           margin: `auto auto`, 
           verticalAlign: `middle`,
           fontSize: heightSmall ? `0.7rem` : `0.9rem`
         }}>
           <p style={{ margin: `auto auto 0.8rem auto`, verticalAlign: `middle`, textAlign: `center`}}>
             Joe Steccato is a software engineer, creative coder, and composing musician based in New York.
             He bridges his talents for art and technology to create and enhance digital interactions 
             of all kinds. 
           </p>
           <p style={{ margin: `auto auto 0.8rem auto`, verticalAlign: `middle`, textAlign: `center`}}>
             Joe has collaborated with artists, businesses, and individuals to offer engineering
             for a wide range of digital systems and services&mdash;from business operations and management, to interactive art installations.
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
          autoHeightClass={null}
        >
        <DrawBox/>
        <AboutBox/>
      </OwlCarousel>
      
    </div>
  </Layout>
)

export default IndexPage
