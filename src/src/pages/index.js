import React, { Component, Fragment } from 'react'
import moize from 'moize'
import naturalSort from 'natural-sort'
import { graphql } from 'gatsby'
import { object } from 'prop-types'

import Layout from '../components/Layout'
import PostList from '../components/PostList'
import ShareIconBar from '../components/ShareIconBar'

const defaultSort = naturalSort()

export default class Index extends Component {
  static propTypes = {
    data: object.isRequired
  }
  shouldComponentUpdate = ({ data }) => this.props.data !== data
  sortedNodes = moize(edges => edges
    .filter(({ node }) => node.frontmatter.type === 'blog')
    .map(({ node }) => ({ ...node.frontmatter, id: node.id }))
    .sort(({ date: a }, { date: b }) => defaultSort(a, b))
    .reverse()
, { maxArgs: 1 })
  render () {
    const { data: { allMdx: { edges } } } = this.props
    return (<Layout>
      {({ siteMetadata }) => (<Fragment>
        <PostList posts={this.sortedNodes(edges)} />
        <ShareIconBar href={siteMetadata.siteUrl} title={siteMetadata.title} />
      </Fragment>)}
    </Layout>)
  }
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