/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'

import {rhythm} from '../utils/typography'

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            avatar: file(absolutePath: { regex: "/profile-pic/" }) {
                childImageSharp {
                    fixed(width: 50, height: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            site {
                siteMetadata {
                    author
                    city
                    social {
                        twitter
                    }
                }
            }
        }
    `)

  const {author, social, city} = data.site.siteMetadata
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: `flex`,
        justifyContent: 'center',
        margin: `${rhythm(2.5)} auto`,
        textAlign: 'center',
        maxWidth: '500px'
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`
        }}
        imgStyle={{
          borderRadius: `50%`
        }}
      />
      <p>
        By <strong>{author}</strong>.
      </p>
    </div>
  )
}

export default Bio
