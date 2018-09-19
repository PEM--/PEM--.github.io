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

export default function Layout ({ children, title, description }) {
  return (<ThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              description
              discussShortName
              siteUrl
              title
            }
          }
        }
      `}
      render={({ site: { siteMetadata } }) => (<Fragment>
        <Helmet
          title={title ? `${siteMetadata.title}: ${title}`: siteMetadata.title}
          meta={[
            { name: 'description', content: description || siteMetadata.description }
          ]}
        />
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