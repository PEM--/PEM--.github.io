import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts'

export default ({ data: { allMarkdownRemark: { edges, totalCount } } }) => (<Layout>
  <h1>List of posts ({totalCount})</h1>
  <p>Some random thoughts and notes about dev, Math, ML & AI</p>
  <nav>
    <ul>
      {edges.map(({ node: { id, frontmatter } }) => (<li key={id}>
        <p>{frontmatter.title} - {frontmatter.date}</p>
      </li>))}
    </ul>
  </nav>
</Layout>)


export const query = graphql`
query site {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MM/DD/YY")
        }
      }
    }
  }
}
`