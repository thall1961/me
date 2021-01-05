import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes, { InferProps } from 'prop-types'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

function BlogIndex({ data, location }: InferProps<typeof BlogIndex.propTypes>) {
    const posts = data?.allMarkdownRemark?.edges || []
    return (
        <Layout location={location}>
            <SEO title="All posts" />
            <Bio />
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
                                <a href="https://www.flybreeze.com?origin=PVU&destination=BNA&beginDate=2021-01-05&endDate=2021-01-05&searchDestinationMacs=false&searchOriginMacs=false&passengers=%7B%22types%22:%5B%7B%22count%22:1,%22type%22:%22ADT%22%7D%5D%7D&infantCount=0">CLICK ME</a>
                                <Link
                                    style={{ boxShadow: `none` }}
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
