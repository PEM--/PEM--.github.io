import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
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

/* eslint-disable */
// Kismetric code
function _kms (u){
  setTimeout(function(){
    var d = document, f = d.getElementsByTagName('script')[0],
    s = d.createElement('script');
    s.type = 'text/javascript'; s.async = true; s.src = u;
    f.parentNode.insertBefore(s, f);
  }, 1);
}
/* eslint-enable */

export default function Layout ({ children, title, description }) {
  /* eslint-disable */
  // Kismetric code
  var _kmq = _kmq || [];
  var _kmk = _kmk || '3377e7168a845ea4ea40f12c6853255b9192f2db';
  _kms('//i.kissmetrics.com/i.js');
  _kms('//scripts.kissmetrics.com/' + _kmk + '.2.js');
  /* eslint-enable */
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
Layout.propTypes = {
  children: any.isRequired,
  description: string,
  title: string
}