import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/Layout'
import ShareIconBar from '../../components/ShareIconBar'
import { title as katexEditor } from './katex-editor'
import { title as textToSlug } from './text-to-slug'

const title = 'Online tools'

export default () => (<Layout title={title}>
  {({ siteMetadata }) => (<Fragment>
    <h1>{title}</h1>
    <p><Link to='/tools/katex-editor'>{katexEditor}</Link></p>
    <p><Link to='/tools/text-to-slug'>{textToSlug}</Link></p>
    <ShareIconBar href={siteMetadata.siteUrl} title={siteMetadata.title} />
  </Fragment>)}
</Layout>)
