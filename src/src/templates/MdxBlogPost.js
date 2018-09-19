import React from 'react'
import { MDXProvider } from "@mdx-js/tag"

import H1 from '../components/H1'
import Layout from '../components/Layout'
import ExternalLink from '../components/ExternalLink'

export default function MdxBlogPost ({ children, pageContext: { frontmatter } }) {
  return (<Layout {...frontmatter}>
    <H1>{frontmatter.title}</H1>
    <MDXProvider
      components={{
        a: ({ href, children }) => <ExternalLink href={href} text={children} />
      }}
    >
      {children}
    </MDXProvider>
  </Layout>)
}