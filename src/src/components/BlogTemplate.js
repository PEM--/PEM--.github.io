import Disqus from 'disqus-react'
import React, { Fragment } from 'react'
import format from 'date-fns/format'
import moize from 'moize'
import styled from 'styled-components'
import { any, object } from 'prop-types'

import Contribute from '../components/Contribute'
import H1 from '../components/H1'
import Layout from '../components/Layout'
import MdxRenderer from '../components/MdxRenderer'
import ShareIconBar from '../components/ShareIconBar'


const CommentsContainer = styled.div`
  @media print {
    display: none;
  }
`

const BlogTemplate = ({ children, location: { href }, pageContext: { frontmatter } }) => {
  const discussConfig = {
    identifier: frontmatter.slug,
    title: frontmatter.title,
    url: href
  }
  return (<Layout {...frontmatter}>
    {({ siteMetadata }) => {
      return (<Fragment>
        <H1>{frontmatter.title}<small>{format(frontmatter.date, 'DD/MM/YY')}</small></H1>
        {frontmatter.contribute && <Contribute slug={frontmatter.slug} />}
        <MdxRenderer>{children}</MdxRenderer>
        <ShareIconBar href={href} title={frontmatter.title} />
        {frontmatter.comment && (<CommentsContainer>
          <Disqus.DiscussionEmbed
            config={discussConfig}
            shortname={siteMetadata.discussShortName} />
        </CommentsContainer>)}
      </Fragment>)}}
  </Layout>)
}
BlogTemplate.propTypes = {
  children: any.isRequired,
  location: object.isRequired,
  pageContext: object.isRequired
}

const MoizedBlogTemplate = moize.react(BlogTemplate)
export default MoizedBlogTemplate