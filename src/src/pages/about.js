import Emoji from 'react-emoji-render'
import React, { Fragment } from 'react'

import ExternalLink from '../components/ExternalLink'
import Layout from '../components/Layout'
import ShareIconBar from '../components/ShareIconBar'

const LiLink = props => <li><ExternalLink {...props} /></li>

export default () => (<Layout>
  {({ siteMetadata }) => (<Fragment>
    <h1>About this blog</h1>
    <p>This blog has been created with:</p>
    <ul>
      <LiLink href='https://www.gatsbyjs.org/' text='Gatsby v2' />
      <LiLink href='https://graphql.org/' text='GraphQL' />
      <LiLink href='https://mdxjs.com/' text='MDX' />
      <LiLink href='https://reactjs.org/' text='React' />
      <LiLink href='https://www.styled-components.com/' text='Styled Components' />
      <li><Emoji text='... to name a few. Thank you all for sharing such massive technologies :+1:' /></li>
    </ul>
    <p>All its source code is released under the MIT license and available in
    this <ExternalLink href='https://github.com/PEM--/PEM--.github.io/tree/master/src' text='Github repository' />.
    Feel free to adapt it to suit your need.</p>
    <h1>About me</h1>
    <p>You can find me on my
      &nbsp;<ExternalLink href='https://www.linkedin.com/in/pemarchandet/' text="LinkedIn's profile" />&nbsp;
      or on <ExternalLink href='https://twitter.com/PEM___' text='Twitter' />.</p>
    <ShareIconBar href={siteMetadata.siteUrl} title={siteMetadata.title} />
  </Fragment>)}
</Layout>)
