import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useMediaQuery } from 'react-responsive'


const Header = ({ siteTitle }) => {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' });
  const topMargin = isMobileOrTablet ? `1.45rem` : `0.45rem`;

  return (
  <header
    style={{
      background: `#000`,
      marginTop: topMargin,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `auto auto`,
        maxWidth: 960,
        padding: `1.0875rem 1.0875rem`,
      }}
    >
      <h1 style={{ 
            margin: `auto`,
            width: `auto`,
            textAlign: `center`,
            marginBottom: `0.45rem`,
          }}
      >
        <Link
          to="/"
          style={{
            color: `#0B67FEFF`,
            textDecoration: `none`,
            width: `auto`,
            margin: `auto`,
            letterSpacing: `0.25rem`,
            fontWeight: `600`
          }}
        >
          Joe Steccato
        </Link>
      </h1>
    </div>

  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
