import Emoji from 'react-emoji-render'
import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import ExternalLink from '../components/ExternalLink'
import Layout from '../components/Layout'

const LiLink = props => <li><ExternalLink {...props} /></li>

export default ({ data: { site: { siteMetadata: { title } }} }) => (<Layout>
  {() => (<Fragment>
    <h1>About this blog</h1>
    <p>This blog has been created with:</p>
    <ul>
      <LiLink href='https://www.gatsbyjs.org/' text='Gatsby v2' />
      <LiLink href='https://graphql.org/' text='GraphQL' />
      <LiLink href='https://reactjs.org/' text='React' />
      <LiLink href='https://www.styled-components.com/' text='Styled Components' />
      <li><Emoji text='... to name a few. Thank you all for sharing such massive technologies :+1:' /></li>
    </ul>
    <h1>About me</h1>
    <p>You can find me on my
      &nbsp;<ExternalLink href='https://www.linkedin.com/in/pemarchandet/' text="LinkedIn's profile" />&nbsp;
      or on <ExternalLink href='https://twitter.com/PEM___' text='Twitter' />.</p>
  </Fragment>)}
</Layout>)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`