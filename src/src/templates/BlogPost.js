import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import { graphql } from 'gatsby'
import Layout from '../layouts'

export default function BlogPost ({ data: { markdownRemark: post, site }, location, ...others }) {
  const config = {
    url: location.href,
    identifier: post.id,
    title: post.frontmatter.title
  }
  return (<Layout>
    <h1>{post.frontmatter.title}</h1>  
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
    <DiscussionEmbed shortname={site.siteMetadata.title} config={config} />
  </Layout>)
}

export const query = graphql`
query ($slug: String!) {
  site {
    siteMetadata {
      title
    }
  }
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    id
    frontmatter {
      title
    }
  }
}`