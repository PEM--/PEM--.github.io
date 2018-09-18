import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layouts'

export default ({ data: { allMarkdownRemark: { edges, totalCount } } }) => (<Layout>
  <h1>List of posts ({totalCount})</h1>
  <p>Some random thoughts and notes about dev, Math, ML & AI</p>
  <nav>
    <ul>
      {edges.map(({ node: { id, fields, frontmatter } }) => (<li key={id}>
        <Link to={fields.slug}><p>{frontmatter.title} - {frontmatter.date}</p></Link>
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
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MM/DD/YY")
          title
        }
      }
    }
  }
}
`