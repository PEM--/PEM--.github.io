import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts'

export default () => (<Layout>
  <h1>404 - Not found</h1>
  <p>This route doesn't exist <span role='img' aria-label='Puzzled'>🤔</span></p>
  <p><Link to='/'>Go back home</Link></p>
</Layout>)