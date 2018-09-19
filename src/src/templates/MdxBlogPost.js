import React from 'react'
import { MDXProvider } from "@mdx-js/tag"

import H1 from '../components/H1'
import Layout from '../components/Layout'
import ExternalLink from '../components/ExternalLink'

export default function MdxBlogPost (props) {
  console.log('props', props)
  return (<Layout>
    <MDXProvider
      components={{
        h1: H1,
        a: ({ href, children }) => <ExternalLink href={href} text={children} />,
        img: props => console.log('props', props) || <img {...props} />
      }}
    >
      {props.children}
    </MDXProvider>
  </Layout>)
}