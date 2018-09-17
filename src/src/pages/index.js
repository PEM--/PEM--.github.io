import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

const Main = styled.main`
  background: aliceblue;
`

const IndexPage = () => (
  <Main>
    <h1>Hi people and all</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Main>
)

export default IndexPage
