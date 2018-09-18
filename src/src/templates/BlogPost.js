import Disqus from 'disqus-react'
import Helmet from 'react-helmet'
import React from 'react'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

const MyComponent = () => <hr />

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "my-component": MyComponent }
}).Compiler

export default function BlogPost ({ data: { markdownRemark: post, site }, location }) {
  const discussProps = {
    config: {
      identifier: post.id,
      title: post.frontmatter.title,
      url: location.href
    },
    shortname: site.siteMetadata.discussShortName
  }
  return (<Layout>
    <Helmet
      title={`${site.siteMetadata.title}: ${post.frontmatter.title}`}
      meta={[
        { name: 'description', content: post.frontmatter.description }
      ]}
    />
    <h1>{post.frontmatter.title}</h1>
    <div>{renderAst(post.htmlAst)}</div>
    <Disqus.DiscussionEmbed {...discussProps} />
  </Layout>)
}

export const query = graphql`
query ($slug: String!) {
  site {
    siteMetadata {
      discussShortName
      title
    }
  }
  markdownRemark(fields: {slug: {eq: $slug}}) {
    frontmatter {
      description
      title
    }
    htmlAst
    id
  }
}`