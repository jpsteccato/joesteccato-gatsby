import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#000`,
      marginTop: `1.45rem`,
      marginBottom: `2.45rem`,
    }}
  >
    <div
      style={{
        margin: `auto auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ 
            margin: `auto`,
            width: `auto`,
            textAlign: `center`,
            marginBottom: `2.45rem`,

          }}
      >
        <Link
          to="/"
          style={{
            color: `#0B67FEFF`,
            textDecoration: `none`,
            width: `auto`,
            margin: `auto`,
            letterSpacing: `0.2rem`
          }}
        >
          Joe Steccato
        </Link>
      </h1>
    </div>
    <div
      style={{
        margin: `auto auto`,
        width: `auto`,
        display: `flex`,
        justifyContent: `space-around`,
        flexDirection: `row`,
        color: `#f00`
      }}
    >
      <Link to="/">
        Home
      </Link>
      <Link to="/about">
        About
      </Link>
      <Link to="/projects">
        Projects
      </Link>
      <Link to="/contact">
        Contact
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
