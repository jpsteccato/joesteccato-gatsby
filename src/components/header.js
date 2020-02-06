import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#000`,
      marginBottom: `1.45rem`,
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
            textAlign: `center`
          }}
      >
        <Link
          to="/"
          style={{
            // color: `#0B67FEFF`,
            textDecoration: `none`,
            width: `auto`,
            margin: `auto`,
          }}
        >
          Joe Steccato
        </Link>
      </h1>
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
