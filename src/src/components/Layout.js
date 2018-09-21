import Helmet from 'react-helmet'
import React, { Component, Fragment } from 'react'
import ReactPixel from 'react-facebook-pixel'
import styled, { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from  'gatsby'
import { any, string } from 'prop-types'
import { size } from 'polished'

import GlobalStyle from '../themes/GlobalStyle'
import Main from '../components/Main'
import Nav from '../components/Nav'
import theme from '../themes'

const LayoutDiv = styled.div`
  background: ${({ theme }) => theme.bgColor};
  margin: 1em auto;
  ${size('100%', '100vw')}
  max-width: ${({ theme }) => theme.maxWidth}px;
  position: relative;
`

const facebookPixelId = '1915349895435128'

export default class Layout extends Component {
  static fbPixelInitialized = false
  static propTypes = {
    children: any.isRequired,
    description: string,
    title: string
  }
  componentDidMount () {
    if (!Layout.fbPixelInitialized) {
      ReactPixel.init(facebookPixelId, {}, {})
      Layout.fbPixelInitialized = true
    }
    ReactPixel.pageView()
  }
  shouldComponentUpdate = () => false
  render () {
    const { children, title, description } = this.props
    return (<ThemeProvider theme={theme}>
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                description
                discussShortName
                googleSearchConsoleOwnershipId
                siteUrl
                title
              }
            }
          }
        `}
        render={({ site: { siteMetadata } }) => (<Fragment>
          <Helmet>
            <html lang='en' amp />
            <title>{title ? `${siteMetadata.title}: ${title}`: siteMetadata.title}</title>
            <meta name='description' content={description || siteMetadata.description} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description || siteMetadata.description} />
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:creator' content='PEM___' />
            <meta name='google-site-verification' content={siteMetadata.googleSearchConsoleOwnershipId} />
          </Helmet>
        <Nav title={siteMetadata.title} />
        <Main>
          <LayoutDiv>{children({ siteMetadata })}</LayoutDiv>
        </Main>
        <GlobalStyle />
      </Fragment>)}
      />
    </ThemeProvider>)
  }
}