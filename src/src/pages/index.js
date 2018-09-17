import React from 'react'
import Link from 'gatsby-link'

import Layout from '../layouts'
import Main from '../components/main'

export default () => (<Layout>
  <h1>PEM's blog</h1>
  <p>Some random thoughts and notes about dev, Math, ML & AI</p>
  <Link to='/about'>About</Link>
</Layout>)