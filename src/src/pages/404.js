import Emoji from 'react-emoji-render'
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts'

export default () => (<Layout>
  <h1>404 - Not found</h1>
  <p><Emoji text="This route doesn't exist 🤔" /></p>
  <p><Link to='/'>Go back home</Link></p>
</Layout>)