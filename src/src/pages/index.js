import React from "react"
import { Link } from 'gatsby'
import Layout from '../layouts'

export default () => (<Layout>
  <main>
    <h1>PEM's blog</h1>
    <p>List of articles</p>
    <Link to='/about'>About</Link>
  </main>
</Layout>)