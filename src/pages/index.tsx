import React from 'react'
import {graphql, Link} from 'gatsby'
import PropTypes, {InferProps} from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {rhythm} from '../utils/typography'

function BlogIndex({data, location}: InferProps<typeof BlogIndex.propTypes>) {
  const posts = data?.allMarkdownRemark?.edges || []
  return (
    <Layout location={location}>
      <SEO title="All posts"/>
      {posts.map((post: any) => {
        const title =
          post.node.frontmatter.title || post.node.fields.slug
        return (
          <article key={post.node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4)
                }}
              >
                <Link
                  style={{boxShadow: `none`}}
                  to={post.node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <small>{post.node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    post.node.frontmatter.description ||
                    post.node.excerpt
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

BlogIndex.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  }),
  location: PropTypes.object.isRequired
}

export default BlogIndex

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    }
`
