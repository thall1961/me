import React from 'react'
import {Link} from 'gatsby'
import PropTypes, {InferProps, string} from 'prop-types'

import {rhythm, scale} from '../utils/typography'
import Bio from "./bio";

import './bkg.css';

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
        marginBottom: '1rem',
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

  const isHome = location.pathname === '/';
  const header = isHome ? homeHeader : otherHeader
  const subHeader = isHome ? <p style={{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '24px'
  }}>Tips and tricks I have picked up along the years.</p> : '';
  return (
    <>
      {isHome
        ? <div className={'bkg'}>
          <header style={{
            marginLeft: `auto`,
            marginRight: `auto`
          }}
          >{homeHeader}</header>
          {subHeader}
          <Bio/>
        </div>
        : <header style={{ textAlign: 'center', padding: '10px 0' }}>
          {otherHeader}
        </header>}
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
