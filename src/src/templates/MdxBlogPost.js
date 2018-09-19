import Disqus from 'disqus-react'
import React, { Fragment } from 'react'
import { MDXProvider } from "@mdx-js/tag"

import H1 from '../components/H1'
import Layout from '../components/Layout'
import ExternalLink from '../components/ExternalLink'

export default function MdxBlogPost (props) {
  const { children, location: { href }, pageContext: { frontmatter } } = props
  const discussConfig = {
    identifier: frontmatter.slug,
    title: frontmatter.title,
    url: href
  }
  return (<Layout {...frontmatter}>
    {({ siteMetadata }) => console.log('siteMetadata', siteMetadata) || (<Fragment>
      <H1>{frontmatter.title}</H1>
      <MDXProvider
        components={{
          a: ({ href, children }) => <ExternalLink href={href} text={children} />
        }}
      >
        {children}
      </MDXProvider>
      <Disqus.DiscussionEmbed config={discussConfig} shortName={siteMetadata.discussShortName} />
    </Fragment>)}
  </Layout>)
}