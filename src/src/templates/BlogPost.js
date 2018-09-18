import React from 'react'
import Disqus from 'disqus-react'
import { graphql } from 'gatsby'
import Layout from '../layouts'

export default function BlogPost ({ data: { markdownRemark: post, site }, location, ...others }) {
  const discussProps = {
    config: {
      identifier: post.id,
      title: post.frontmatter.title,
      url: location.href
    },
    shortname: site.siteMetadata.siteUrl
  }
  return (<Layout>
    <h1>{post.frontmatter.title}</h1>
    <p><Disqus.CommentCount {...discussProps}>comments</Disqus.CommentCount></p>
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
    <Disqus.DiscussionEmbed {...discussProps} />
  </Layout>)
}

export const query = graphql`
query ($slug: String!) {
  site {
    siteMetadata {
      siteUrl
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