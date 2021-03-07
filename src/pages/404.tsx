import React from 'react'
import {graphql} from 'gatsby'
import PropTypes, {InferProps} from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'

// class NotFoundPage extends React.Component {
function NotFoundPage({location}: InferProps<typeof NotFoundPage.propTypes>) {
  return (
    <Layout location={location}>
      <SEO title="404: Not Found"/>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default NotFoundPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
