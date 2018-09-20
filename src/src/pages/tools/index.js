import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/Layout'
import ShareIconBar from '../../components/ShareIconBar'
import { title as katexEditorTitle } from './katex-editor'

const title = 'Online tools'

export default () => (<Layout title={title}>
  {({ siteMetadata }) => (<Fragment>
    <h1>{title}</h1>
    <p><Link to='/tools/katex-editor'>{katexEditorTitle}</Link></p>
    <ShareIconBar href={siteMetadata.siteUrl} title={siteMetadata.title} />
  </Fragment>)}
</Layout>)
