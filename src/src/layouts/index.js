import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from  'gatsby'
import { any } from 'prop-types'
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
`

const Layout = ({ children }) => (<ThemeProvider theme={theme}>
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={({ site: { siteMetadata: { title } } }) => (<Fragment>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
    <Nav title={title} />
    <Main>
      <LayoutDiv>{children}</LayoutDiv>
    </Main>
    <GlobalStyle />
  </Fragment>)}
  />
</ThemeProvider>)
Layout.propTypes = {
  children: any.isRequired
}
export default Layout