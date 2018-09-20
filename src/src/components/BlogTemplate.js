import Disqus from 'disqus-react'
import React, { Fragment, PureComponent } from 'react'

import Contribute from '../components/Contribute'
import H1 from '../components/H1'
import Layout from '../components/Layout'
import MdxRenderer from '../components/MdxRenderer'
import ShareIconBar from '../components/ShareIconBar'

export default class BlogTemplate extends PureComponent {
  render () {
    const { children, location: { href }, pageContext: { frontmatter } } = this.props
    const discussConfig = {
      identifier: frontmatter.slug,
      title: frontmatter.title,
      url: href
    }
    return (<Layout {...frontmatter}>
      {({ siteMetadata }) => (<Fragment>
        <H1>{frontmatter.title}</H1>
        {frontmatter.contribute && <Contribute slug={frontmatter.slug} />}
        <MdxRenderer>{children}</MdxRenderer>
        <ShareIconBar href={href} title={frontmatter.title} />
        {frontmatter.comment && <Disqus.DiscussionEmbed
          config={discussConfig}
          shortName={siteMetadata.discussShortName} />}
      </Fragment>)}
    </Layout>)
  }
}