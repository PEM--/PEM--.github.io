import React, { Fragment } from 'react'
import naturalSort from 'natural-sort'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PostList from '../components/PostList'
import ShareIconBar from '../components/ShareIconBar'

const defaultSort = naturalSort()

export default function Index ({ data: { allMdx: { edges } } }) {
  const nodes = edges
    .filter(({ node }) => node.frontmatter.type === 'blog')
    .map(({ node }) => ({ ...node.frontmatter, id: node.id }))
    .sort(({ date: a }, { date: b }) => defaultSort(a, b))
    .reverse()
  return (<Layout>
    {({ siteMetadata }) => (<Fragment>
      <PostList posts={nodes} />
      <ShareIconBar href={siteMetadata.siteUrl} title={siteMetadata.title} />
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