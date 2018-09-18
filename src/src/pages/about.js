import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts'

export default ({ data: { site: { siteMetadata: { title } }} }) => (<Layout>
  <h1>About {title}</h1>
</Layout>)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`