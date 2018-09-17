import React, { Fragment } from 'react'
import styled from 'styled-components'
import { StaticQuery, Link, graphql } from  'gatsby'
import { element } from 'prop-types'
import Helmet from 'react-helmet'

import Main from '../components/main'

const LayoutDiv = styled.div`
  margin: 1em auto;
  width: 960px;
`

const Nav = styled.nav`
  background: aliceblue;
`

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  >* {
    display: block;
    flex: 0 0 auto;
  }
`

const LinkList = styled.ul`
  list-style-type: none;
  margin: auto;
  white-space: nowrap;
  >li { margin: 0; }
`

const Layout = ({ children }) => (<Fragment>
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
    render={({ site: { siteMetadata: { title } } }) => (<Nav>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header>
        <Link to='/'><h1>{title}</h1></Link>
        <LinkList>
          <li><Link to='/about'>About</Link></li>
        </LinkList>
      </Header>
  </Nav>)}
  />
  <Main>
    <LayoutDiv>{children}</LayoutDiv>
  </Main>
</Fragment>)
Layout.propTypes = {
  childre: element.isRequired
}
export default Layout