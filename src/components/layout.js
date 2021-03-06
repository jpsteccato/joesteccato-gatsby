/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from 'react-responsive'

import Header from "./header"
import "./layout.css"

import Github from "../svgs/github"
import Email from "../svgs/email"
import LinkedIn from "../svgs/linkedin"
import BitBucket from "../svgs/bitbucket"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' });
  const svgSize = isMobileOrTablet ? `1.5rem` : `2rem`;

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `auto auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          height: `auto`,
          display: `flex`,
          justifyContent: `space-around`,
          flexDirection: `column`,
          width: `100%`
        }}
      >
        <main>{children}</main>
      </div>

      <footer  
        style={{
          position: `absolute`,
          bottom: `0`,
          height: `3.8rem`,
          textAlign: `center`,
          width: `100%`,
          fontSize: `0.6rem`,
          marginBottom: `${isMobileOrTablet ? `0rem` :  `1.0rem`}`
         }}
      >
        <div 
          style={{
            width: `${isMobileOrTablet ? `200px` :  `300px`}`, 
            fill: `#2FDE04FF`,
            display: `flex`,
            flexDirection: `row`, 
            justifyContent: `space-around`, 
            margin: `0 auto`
          }}>
          <Email width={svgSize}/>
          <Github width={svgSize}/>
          <BitBucket width={svgSize}/>
          <LinkedIn width={svgSize}/>
        </div>
      <div style={{opacity: `0.7`, display: `none`}}>© {new Date().getFullYear()} Joe Steccato</div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
