import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts'

export default () => (<Layout>
  <main>
    <h1>About</h1>
    <p>PEM's blog</p>
    <Link to='/'>Home</Link>
  </main>
</Layout>)