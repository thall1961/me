import React from 'react'
import {Link} from 'gatsby'
import PropTypes, {InferProps, string} from 'prop-types'

import {rhythm, scale} from '../utils/typography'

export const colors = {
  lightBlue: `#88bdbc`,
  darkBlue: `#254e58`,
  dark: `#112d32`,
  darkBrown: `#4f4a41`,
  brown: `#6e6658`
}

function Layout({location, children}: InferProps<typeof Layout.propTypes>) {
  const homeHeader = (
    <h1
      style={{
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`
        }}
        to={`/`}
      >
        Dev Tips
      </Link>
    </h1>
  )

  const otherHeader = (
    <h3
      style={{
        fontFamily: `Montserrat, sans-serif`,
        marginTop: 0
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`
        }}
        to={`/`}
      >
        Dev Tips
      </Link>
    </h3>
  )

  const header = location.pathname === '/' ? homeHeader : otherHeader
  return (
    <>
      <div style={{
        padding: `${rhythm(10)} 0`,
        background: '#6200EA',
        textAlign: 'center'
      }}
      >
        <header style={{
          marginLeft: `auto`,
          marginRight: `auto`
        }}
        >{header}</header>
      </div>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}</footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: string
  }).isRequired,
  children: PropTypes.object
}

export default Layout
