import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Layout from '../layouts'

export default ({ data }) => (<Layout>
  <h1>List of posts ({data.allMarkdownRemark.totalCount})</h1>
  <p>Some random thoughts and notes about dev, Math, ML & AI</p>
  <Link to='/about'>About</Link>
</Layout>)


export const query = graphql`
  query site {
  	allMarkdownRemark {
    	totalCount
  	}    
  }
`