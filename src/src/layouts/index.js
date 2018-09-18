import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import { StaticQuery, Link, graphql } from  'gatsby'
import { any } from 'prop-types'

import Main from '../components/main'
import theme from '../themes'

const LayoutDiv = styled.div`
  margin: 1em auto;
  width: 100vw;
  max-width: ${({ theme }) => theme.maxWidth}px;
`

const Nav = styled.nav`
  background: aliceblue;
`

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth}px;
  padding: .5em 0;
  >* {
    display: block;
    flex: 0 0 auto;
  }
  h1 { margin: 0; }
`

const LinkList = styled.ul`
  list-style-type: none;
  margin: 0;
  white-space: nowrap;
  >li { margin: 0; }
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
      <Nav>
        <Header>
          <Link to='/'><h1>{title}</h1></Link>
          <LinkList>
            <li><Link to='/about'>About</Link></li>
          </LinkList>
        </Header>
    </Nav>
    <Main>
      <LayoutDiv>{children}</LayoutDiv>
    </Main>
  </Fragment>)}
  />
</ThemeProvider>)
Layout.propTypes = {
  children: any.isRequired
}
export default Layout