import React, { Fragment } from 'react'
import dateFns from 'date-fns'
import naturalSort from 'natural-sort'
import { Link, graphql } from 'gatsby'

import H1 from '../components/H1'
import Layout from '../components/Layout'

const defaultSort = naturalSort()

export default function Index ({ data: { allMdx: { edges } } }) {
  const nodes = edges
    .filter(({ node }) => node.frontmatter.type === 'blog')
    .map(({ node }) => ({ ...node.frontmatter, id: node.id }))
    .sort(({ date: a }, { date: b }) => defaultSort(a, b))
    .reverse()
  return (<Layout>
    {() => (<Fragment>
      <H1>List of posts <small>{nodes.length} posts</small></H1>
      <nav>
        <ul>
          {nodes.map(({ date, description, id, slug, title }) => (<li key={id}>
            <Link to={`blog/${slug}`}><p>{title} - {dateFns.format(date, 'DD/MM/YY')}</p></Link>
          </li>))}
        </ul>
      </nav>
    </Fragment>)}
  </Layout>)
}

export const query = graphql`
query site {
  allMdx {
    edges {
      node {
        frontmatter {
          date
          description
          slug
          title
          type
        }
        id
      }
    }
  }
}`