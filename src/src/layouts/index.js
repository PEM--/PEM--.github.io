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
    render={data => <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />}
  />
  <Main>
    <LayoutDiv>{children}</LayoutDiv>
  </Main>
</Fragment>)
Layout.propTypes = {
  childre: element.isRequired
}
export default Layout