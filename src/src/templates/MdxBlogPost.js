import Disqus from 'disqus-react'
import React, { Fragment } from 'react'
import { MDXProvider } from "@mdx-js/tag"

import Contribute from '../components/Contribute'
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
  console.log('frontmatter', frontmatter)
  return (<Layout {...frontmatter}>
    {({ siteMetadata }) => (<Fragment>
      <H1>{frontmatter.title}</H1>
      {frontmatter.contribute && <Contribute slug={frontmatter.slug} />}
      <MDXProvider
        components={{
          a: ({ href, children }) => <ExternalLink href={href} text={children} />
        }}
      >
        {children}
      </MDXProvider>
      {frontmatter.comment && <Disqus.DiscussionEmbed
        config={discussConfig}
        shortName={siteMetadata.discussShortName} />}
    </Fragment>)}
  </Layout>)
}