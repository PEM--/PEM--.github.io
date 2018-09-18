import React from 'react'
import { Link, graphql } from 'gatsby'
import H1 from '../components/H1'
import Layout from '../layouts'

export default ({ data: { allMarkdownRemark: { edges, totalCount } } }) => (<Layout>
  <H1>List of posts <small>{totalCount} posts</small></H1>
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